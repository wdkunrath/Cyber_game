import React from 'react';
import { useHome } from '../../hooks/home';
import { Container } from './styles';

const ListMock: React.FC = ({ ...props }) => {
  const { getLista } = useHome();
  
  const listM = getLista('mock');
   
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