import React from 'react';
import ListaMock from '../../mock/lista'
import { Container } from './styles';
import { IListaContext } from '../../interfaces/ListaContext';

const Home: React.FC = () => {
  const modal= (id: number) =>{
    console.log(id);
  }

  return (
    <div>     
        {ListaMock.map(lista => {
          <div key={lista.id} onClick={()=> modal(lista.id)}>
            <img src={lista.img}/>
            {lista.description} 
          </div>
        })}
    </div>
  );
}

export default Home;