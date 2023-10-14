import { SetStateAction, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import UserServices from "../services/UserServices";

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  signup(name: string, login: IUserLogin): Promise<{ success: boolean; message: string; }>;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

const User = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      UserServices.update(user.id, user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = async (name: string, login: IUserLogin) => {
    try {
      const id = uuidv4();

      const newUser: IUser = {
        id,
        name,
        login,
        createdAt: new Date(),
        updateAt: new Date()
      };

      const user = await UserServices.getByEmail(login.email);

      if (user) {
        throw Error("A user with this email already exists.");
      } else {
        await UserServices.create(newUser);
      }

      return {
        success: true,
        message:
          "User registered successfully! Log in using the provided email and password.",
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

  return (
    <UserContext.Provider value={{ user, setUser, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;
