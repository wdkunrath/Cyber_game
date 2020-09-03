import React from 'react';
import { Container } from './styles';
import TabsComponent from '../../components/TabsComponent';
import ListMock from '../../components/ListMock';
import ListDribbble from '../../components/ListDribbble';
import Lista from '../../mock/lista';
 
const Home: React.FC = () => {
  const listaMock = () =>{
    return (
      <ListMock lista={Lista}/>
    )
  }
  
  return (
    <Container>
      <h1>Galeria</h1>    
      <TabsComponent
        arrayTabs={["Mockado", "Dribbble"]}
        arrayContent={[listaMock, ListDribbble]}
      />
    </Container>
  );
}

export default Home;