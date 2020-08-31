import { createContext } from 'react';

export interface IListaContext {
    getLista(type: string): [];  
    listMock():void;
    listDribbble(): void;  
}

const ListaContext = createContext<IListaContext>({} as IListaContext);

export { ListaContext };