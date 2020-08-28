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

    const signIn = async (client_id: string, secret_id: string) => {  
        const popUp =  window.open(
            `https://dribbble.com/oauth/authorize?client_id=${client_id}`,
            "Dribbble", 
            "menubar=yes,height=570,width=520,resizable=yes,top=450,left=500,scrollbars=yes,status=yes"
        );
        
        
        setTimeout(async () => {
            const url = document.location.search.substr(1).split('&')[0];
            const result = await AuthService.getAuthorize(client_id,secret_id, url);
            localStorage.setItem('@cyber-access:TOKEN', result?.data?.access_token);            
            popUp?.close();             
        }, 60);

        localStorage.setItem('@cyber-access:logged', 'true');        
        setLogged(true);
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