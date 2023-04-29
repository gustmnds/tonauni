import React from "react";

export type AuthInterface = {
  setToken: (token: string) => void;
  token: string;
};


export const AuthContext = React.createContext<AuthInterface | null>(null);
export const AuthProvider = AuthContext.Provider;
