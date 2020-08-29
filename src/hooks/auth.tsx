import React, { useState, useContext,useMemo, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext, IAuthContext } from '../interfaces/AuthContext/index';
import AuthService from '../services/Auth'; 
import Loader from '../components/Loader';

const AuthProvider: React.FC = ({ children }) => {
    const history = useHistory();

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@cyber-access:logged');

        return !!isLogged;
    });

    const signIn = async () => {
        window.open(
            'http://localhost:3000/login-response',
            "Dribbble", 
            "menubar=yes,height=570,width=520,resizable=yes,top=450,left=500,scrollbars=yes,status=yes"
        );        
    }
    
    const signOut = () => {
        localStorage.removeItem('@cyber-access:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };