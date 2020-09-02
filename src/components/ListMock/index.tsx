import React from 'react';
import { useHome } from '../../hooks/home';
import { Container } from './styles';

type props = {
  id?:number;
  img?:string;
  title?:string;
  description?:string;
}

const ListMock: React.FC<props> = ({ ...props }) => {
  // const { getLista } = useHome();
  
  // const listM = getLista('mock');

  //console.log(listM);
   
  return (
    <Container> 
      <h1>Mockado</h1>
      {/* {listM.map((list) => {
        {list}
      })} */}
    </Container>
  );
}

export default ListMock;