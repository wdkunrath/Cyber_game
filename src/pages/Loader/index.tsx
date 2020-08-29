import React,{ useEffect } from 'react';
import LoaderComponents from '../../components/Loader';
import { useHistory  } from "react-router-dom";

import { IRouteParams } from '../../interfaces/RouteContext';
import { Container } from './styles';

const Loader: React.FC<IRouteParams> = ({ match }) => {
//console.log('teste');
  //  const client_id="6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0";
  //  const secret_id="9a4343a04969945b043e6c28d1f95c91444372a8f140961e346a331cea7805fd"; 
  //  const history = useHistory();
  //  history.replace(`https://dribbble.com/oauth/authorize?client_id=${client_id}`);   
 // https://dribbble.com/oauth/authorize?client_id=${client_id}
//       
  
//   popUp?.history.pushState('/login-response', '');
//   console.log(history.listen);
      
//   setTimeout(async () => {
       
//       const url = document.location.search.substr(1).split('&')[0];
//       const result = await AuthService.getAuthorize(client_id,secret_id, url);
//       localStorage.setItem('@cyber-access:TOKEN', result?.data?.access_token);            
//      // popUp?.close();             
//   }, 160);
  
  // localStorage.setItem('@cyber-access:logged', 'true');        
  // setLogged(true);

  //  useEffect(() => {
      //const movimentType = match.params.code;
     // console.log(location.search);
     
      
    // }, [history]); 
   
   
    return (
      <Container>
         <LoaderComponents/>
         <h1>teste</h1>
      </Container>
    );
}

export default Loader;