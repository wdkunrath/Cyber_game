import React, { createContext } from 'react';

export interface IListaContext {
    id: number;
    images : string;
    title: string;
    description: string;
}

const ListaContext = createContext<IListaContext>({} as IListaContext);

export { ListaContext };