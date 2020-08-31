import React from 'react';
import { Container } from './styles';
import TabsComponent from '../../components/TabsComponent';
import ListMock from '../../components/ListMock';
import ListDribbble from '../../components/ListDribbble';
 
const Home: React.FC = () => {
  
  return (
    <Container>
      <h1>Galeria</h1>    
      <TabsComponent
        arrayTabs={["Mockado", "Dribbble"]}
        arrayContent={[ListMock, ListDribbble]}
      />
    </Container>
  );
}

export default Home;