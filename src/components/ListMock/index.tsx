import React from 'react';

import { Container } from './styles';

const ListMock: React.FC = ({ ...props }) => {
  const lista = props.listComponent;

  return (
    <Container>
      <h1>Mockado</h1>
      {lista.map( list => {
        {list}
      })}
    </Container>
  );
}

export default ListMock;