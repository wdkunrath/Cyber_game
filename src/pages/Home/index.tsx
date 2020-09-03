import React from 'react';
import { Container } from './styles';
import TabsComponent from '../../components/TabsComponent';
import ListMock from '../../components/ListMock';
import ListDribbble from '../../components/ListDribbble';
import Lista from '../../mock/lista';
import HomeService from '../../services/Home';
import { promises } from 'dns';
 
const Home: React.FC = () => {
  const listaMock = () =>{
    return (
      <ListMock lista={Lista}/>
    )
  }

  const listaDrib = async () => {
    const result = await HomeService.getList();
    if(result){
      console.log(result);  
    }
  }
  
  return (
    <Container>
      <h1>Galeria</h1>    
      <TabsComponent
        arrayTabs={["Mockado", "Dribbble"]}
        arrayContent={[listaMock, listaDrib]}
      />
    </Container>
  );
}

export default Home;