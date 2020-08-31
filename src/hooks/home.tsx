import React, { useContext} from 'react';
import { IListaContext, ListaContext } from '../interfaces/ListaContext';
import HomeService from '../services/Home';
import Lista from '../mock/lista';
import ListMock from '../components/ListMock';
import ListDribbble from '../components/ListDribbble';

const HomeProvider: React.FC = ({ children }) => {
    const getLista = async (type: string) => {        
        switch (type) {
          case 'mock':
            return Lista;            
          case 'drib':
            const result = await HomeService.getList();
            if(result.status === 200){
                  console.log(result);
              }else{
                  console.log(result);
              }
            
            return result;
          default:
            break;
        }
    }

    const listMock = () => {
        const listM = getLista('mock');
        
        return (
          <ListMock listComponent={listM}/>
        )
      }
    
      const listDribbble =() =>{
        const dribble = getLista('drib');
        return (
          <ListDribbble listComponent/>
        )
      }

    return (
        <ListaContext.Provider value={{ getLista, listDribbble, listMock}}>
            {children}
        </ListaContext.Provider>
    );
}

function useHome(): IListaContext {
    const context = useContext(ListaContext);
    return context;
}

export { HomeProvider, useHome };