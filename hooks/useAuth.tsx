import { UserContext, UserContextType } from "@/contexts/userContexts";
import { useContext } from "react";
export const useAuth = () => {
  const context = useContext<UserContextType>(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
