import React from 'react';
import { Container, Card } from './styles';

type Ilista = {
  lista: {
    id:number;
    img: string | undefined;
    title:string | undefined;
    description:string | undefined;
  }[]
};

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