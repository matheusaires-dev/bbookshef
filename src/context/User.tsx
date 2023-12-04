import { SetStateAction, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import UserServices from "../services/UserServices";
import BookService from "../services/libary";

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  signup(name: string, email: string, password: string): Promise<{ success: boolean; message: string; }>;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

const User = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user && user._id) {
      UserServices.update(user._id, user);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = async (name: string, email: string, password: string) => {
    try {

      const newUser = {
        name,
        email,
        password
      };

      const response = await UserServices.create(newUser);

      if (response.success) {
        return {
          success: true,
          message:
            "User registered successfully! Log in using the provided email and password.",
        };
      }

      throw Error(response.message);


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
