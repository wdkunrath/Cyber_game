import React, { createContext } from 'react';

export interface IAuthContext {
    logged: boolean;
    signIn(): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export { AuthContext };

