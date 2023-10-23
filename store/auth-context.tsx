import { createContext } from "react";

export type UserData = {
    userId: String,
    isAuthenticated: Boolean
}

const AuthContext = createContext<UserData>({
 userId: 'default value',
 isAuthenticated: false,
});

export default AuthContext;