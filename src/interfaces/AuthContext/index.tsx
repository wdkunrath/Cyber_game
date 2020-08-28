import React, { createContext } from 'react';

export interface IAuthContext {
    logged: boolean;
    signIn(client_id: string, secret_id:string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export { AuthContext };

