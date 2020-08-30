import React, { useState } from 'react';
import { Container } from './styles';
import { useHome } from '../../hooks/home';

const Home: React.FC = ({ children }) => {
  const { getLista } = useHome();
  
  return (
    <div>     
        {/* {lista.map(lista => {
          <div key={lista.id} >
            <img src={lista.images}/>
            {lista.title} 
          </div>
        })} */}
    </div>
  );
}

export default Home;