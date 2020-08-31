import { createContext } from 'react';

export interface IListaContext {
    getLista(type: string): any ;  
}

const ListaContext = createContext<IListaContext>({} as IListaContext);

export { ListaContext };