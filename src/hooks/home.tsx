import React, { useState, useContext} from 'react';
import { IListaContext, ListaContext } from '../interfaces/ListaContext';
import HomeService from '../services/Home';

const HomeProvider: React.FC = ({ children }) => ({
    const [lista, setLista] = useState([]);

    const getLista = async () => {
        const result = await HomeService.getList();
    }
})

function useHome(): IListaContext {
    const context = useContext(ListaContext);
    return context;
}

export { HomeProvider, useHome };