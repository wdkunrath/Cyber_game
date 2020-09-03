import React from 'react';
import { Container, Card } from './styles';
import { IlistaDrib } from '../../interfaces/ListaContext';

const ListDribbble: React.FC<IlistaDrib> = ({lista}) => {
    
  return (
    <Container>
      {lista.map(list => 
      <>
        <Card key={list?.id}>
          <img src={list?.html_url}/>
        </Card>
      </>
      )}
    </Container>
  );
}

export default ListDribbble;