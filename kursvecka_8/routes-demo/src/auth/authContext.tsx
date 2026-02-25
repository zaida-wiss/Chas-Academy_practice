import React, {createContext, useContext, useState, useCallback } from "react";

//Definition of AuthContext


type AuthContextValue ={
  status: AuthStatus;
  user: string | null;
  login: (credentials: { email:string; password: string}) =>
    Promise <boolean>;
  logout: () => void;
  }

  const AuthContext = createContext <AuthContextValue | null >(null);

  export function useAuth(): AuthContextValue {
    const ctx =useContext(AuthContext);
    if (!ctx) throw new Error ("useAuth have to be used within AuthProvider");
    return ctx;
  }

  export function AuthProvider({children}: {children: React.ReactNode}) {
    const [status, setStatus] = useState<AuthStatus>("unauthenticated");
    const [user, setUser] = useState<string | null>(null);

    const login = useCallback(
      async (credentials: { email: string; password: string }): Promise<boolean> => {
        // Simulated API call with timeout
        await new Promise((r) => setTimeout(r, 500));
        if (credentials.email && credentials.password) {
          setStatus("authenticated");
          setUser(credentials.email);
          return true;
        }
        return false;
      },
      []
    );

    const logout = useCallback(() => {
      setStatus("unauthenticated");
      setUser(null);
    },[]);

    return (
      <AuthContext.Provider value={{ status, user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
