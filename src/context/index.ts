import {createContext} from "react";
import {IContext} from "../types/types";


export const AuthContext = createContext<IContext>({} as  any)