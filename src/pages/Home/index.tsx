import React from 'react';
import { Container } from './styles';
import { useHome } from '../../hooks/home';
import TabsComponent from '../../components/TabsComponent';

const Home: React.FC = ({ children }) => {
  const { listMock, listDribbble } = useHome();
  
  return (
    <Container>    
      <TabsComponent
          arrayTabs={["Mockado", "Dribbble"]}
          arrayContent={[ 
            listMock,
            listDribbble,
          ]}
        /> 
      <h1>teste</h1>
        {/* {getLista.map(list => {
          <div key={list.id} >
            <img src={list.images}/>
            {list.title} 
          </div>
        })} */}
    </Container>
  );
}

export default Home;