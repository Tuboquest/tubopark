import { Fetch } from "@/api";
import { User } from "@/types/User";
import React, { ReactElement, createContext, useState } from "react";

export interface UserContextType {
  token: string;
  user: User | null;
  setUser: (user: User) => void;
  auth: (token: string, user: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType,
);

export const UserProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

  const auth = (token: string, user: User) => {
    setToken(token);
    setUser(user);
    Fetch.setToken(user.token);
    console.log("token: ", token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ token, user, auth, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
