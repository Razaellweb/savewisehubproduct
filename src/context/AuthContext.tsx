"use client";
import {
  createContext,
  useLayoutEffect,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { supabase } from "@/supabse_client";
import {
  User,
  Session,
  WeakPassword,
  Provider,
} from "@supabase/supabase-js";
import { returnError } from "@/lib/utils";

interface AuthContextType {
  session: Session | null;
  signup: (
    email: string,
    password: string
  ) => Promise<
    | { success: boolean; error: string; data?: undefined }
    | {
        success: boolean;
        data: {
          user: User | null;
          session: Session | null;
        };
        error?: undefined;
      }
  >;

  signin: (
    email: string,
    password: string
  ) => Promise<
    | {
        success: boolean;
        error: string;
        data?: undefined;
      }
    | {
        success: boolean;
        data:
          | {
              user: User;
              session: Session;
              weakPassword?: WeakPassword;
            }
          | {
              user: null;
              session: null;
              weakPassword?: null;
            };
        error?: undefined;
      }
  >;

  signout: () => Promise<void>;
  handleProviderSignIn: (
    provider: Provider,
    redirectTo?: string
  ) => Promise<
    | {
        success: boolean;
        error: string;
        data?: undefined;
      }
    | {
        success: boolean;
        data:
          | {
              provider: Provider;
              url: string;
            }
          | {
              provider: Provider;
              url: null;
            };
        error?: undefined;
      }
  >;
  handleGetSession: () => Promise<
    | {
        success: boolean;
        error: string;
        data?: undefined;
      }
    | {
        success: boolean;
        data:
          | {
              session: Session;
            }
          | {
              session: null;
            };
        error?: undefined;
      }
  >;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<null | Session>(null);

  // signup
  const signup = async (email: string, password: string) => {
    try {
      if (supabase) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
          console.error("there was an error signing up", error);
          return { success: false, error: error.message };
        }
        return { success: true, data };
      }
      return { success: false, error: "Auth temporarily unavailable. Please try again later." };
    } catch (error) {
      console.error("unexpected error signing up", error);
      const message = returnError(error);
      return { success: false, error: message || "Unknown error" };
    }
  };

  //sign out
  const signout = async () => {
    if (supabase) {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("there was an error logging out", error);
      }
    }
  };

  //sign in
  const signin = async (email: string, password: string) => {
    try {
      if (supabase) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          console.error("there was an error signing in", error);
          return { success: false, error: error.message };
        }

        return { success: true, data };
      }
      return { success: false, error: "Auth temporarily unavailable. Please try again later." };
    } catch (error) {
      console.error("there was an error signing in", error);
      const message = returnError(error);
      return { success: false, error: message || "Unknown error" };
    }
  };

  const handleProviderSignIn = async (
    provider: Provider,
    redirectTo?: string
  ) => {
    if (supabase) {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo },
      });
      if (error) {
        console.error("there was an error signing in", error);
        return { success: false, error: error.message };
      }
      return { success: true, data };
    }
    return { success: false, error: "Auth temporarily unavailable. Please try again later." };
  };

  const handleGetSession = useCallback(async () => {
    if (supabase) {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("there was an error signing in", error);
        return { success: false, error: error.message };
      }

      setSession(data.session);

      return { success: true, data };
    }
    return { success: false, error: "Auth temporarily unavailable. Please try again later." };
  }, []);

  useLayoutEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
        signup,
        signin,
        signout,
        handleProviderSignIn,
        handleGetSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};
