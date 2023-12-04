import React, { createContext } from "react";
import { useUser } from "../hooks/userUser";
import UserServices from "../services/UserServices";

interface IAuth {
  signed: boolean;
  signin: (login: IUserLogin) => Promise<IResponseDefault>;
  signout: () => void;
}

export const AuthContext = createContext<IAuth | undefined>(undefined);

export const Auth = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useUser();

  const signin = async (login: IUserLogin) => {
    try {
      const user = await UserServices.auth(login);

      if (!user.success) throw Error("login error.")
      
      setUser(user.data as IUser);

      return {
        success: true,
        message: "login successful",
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
        };
      } else {
        return {
          success: false,
          message: "An unknown error occurred.",
        };
      }
    }

  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
