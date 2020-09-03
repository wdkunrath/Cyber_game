import React from 'react';
import { Container, Card } from './styles';
import { Ilista } from '../../interfaces/ListaContext';

const ListMock: React.FC<Ilista> = ({lista}) => {
  
  return (
    <Container>
      {lista.map(list => 
      <>
        <Card key={list?.id}>
          <img src={list?.img}/>
        </Card>
      </>
      )}
    </Container>
  );
}

export default ListMock;