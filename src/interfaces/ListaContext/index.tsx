import { createContext, ReactNode, ReactElement } from 'react';

export interface IListaContext {
   getLista(type: string) : void ;  
}

export interface Ilista{
    id:number;
    img:string;
    title:string;
    description:string;
}

const ListaContext = createContext<IListaContext>({} as IListaContext);

export { ListaContext };             