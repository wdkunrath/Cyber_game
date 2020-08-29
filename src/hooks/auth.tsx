import React, { useState, useContext } from 'react';
import { AuthContext, IAuthContext } from '../interfaces/AuthContext/index';

const AuthProvider: React.FC = ({ children }) => {
    const popUp = window;
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@cyber-access:logged');

        return !!isLogged;
    });

    const signIn = async () => {
        popUp.open(
            'http://localhost:3000/login-response',
            "Dribbble", 
            "menubar=yes,height=570,width=520,resizable=yes,top=450,left=500,scrollbars=yes,status=yes"
        );        
    }

    const signInRegister = async ( token:string) => {
        localStorage.setItem('@cyber-access:logged', 'true');
        sessionStorage.setItem('@cyber-access:access_token', 'token');      
        setLogged(true);  
        popUp?.close(); 
    }
    
    const signOut = () => {
        localStorage.removeItem('@cyber-access:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut, signInRegister}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };