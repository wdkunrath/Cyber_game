import React, { useState, useDebugValue, useEffect } from 'react';
import ListaMock from '../../mock/lista';
import { Container } from './styles';
import { IListaContext } from '../../interfaces/ListaContext';
import HomeService from '../../services/Home';

const Home: React.FC = () => {
  const [lista, setLista] = useState([]);

  let getList = async () => {
    const result = await HomeService.getList();
    setLista(result);
  }

  console.log(lista);
  return (
    <div>     
        {/* {lista.map(lista => {
          <div key={lista.id} >
            <img src={lista.img}/>
            {lista.description} 
          </div>
        })} */}
    </div>
  );
}

export default Home;