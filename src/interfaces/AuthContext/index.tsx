import React, { createContext } from 'react';
export interface IAuthContext {
    logged: boolean;
    signInRegister(token: string): void;
    signIn(): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export { AuthContext };

