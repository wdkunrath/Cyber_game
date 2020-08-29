import React from 'react';
import LoaderComponents from '../../components/Loader';
import { useHistory } from "react-router-dom";
import { Container } from './styles';
import AuthService from '../../services/Auth';

const Loader: React.FC = () => {
   const client_id="6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0";
   const secret_id="9a4343a04969945b043e6c28d1f95c91444372a8f140961e346a331cea7805fd";
   const history = useHistory();
   const url = window.location.search;
   var code = '';
   
   function ValueCode(params: string){  
     let cod = params.split('=');   
     return cod[1];
  }

   if(url === ""){
      window.location.href = `https://dribbble.com/oauth/authorize?client_id=${client_id}`;              
   }else{    
      code = ValueCode(url);
      console.log(code);
      const result = AuthService.getAuthorize(client_id, secret_id, code );
      if(result){
        console.log(result);
        // localStorage.setItem('@cyber-access:logged', 'true');        
         // setLogged(true);  
        // popUp?.close(); 
      }
   }

    return (
      <Container>
         <LoaderComponents/>
      </Container>
    );
}

export default Loader;