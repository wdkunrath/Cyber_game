import { createContext } from 'react';
export interface IAuthContext {
    logged: boolean;
    signInRegister(): void;
    signIn(): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export { AuthContext };

