import React from 'react';
import LoaderComponents from '../../components/Loader';
import { Container } from './styles';
import AuthService from '../../services/Auth';
import { useAuth } from '../../hooks/auth';

const Loader: React.FC = () => {
    let { signInRegister } = useAuth();
    let url = window.location.search;
    let client_id="6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0";
    let secret_id="9a4343a04969945b043e6c28d1f95c91444372a8f140961e346a331cea7805fd";
    let code = '';    
    
    function ValueCode(params: string){  
      let cod = params.split('=');   
      return cod[1];
    }

    let getToken = async () =>{
      let result = await AuthService.getAuthorize(client_id, secret_id, code);
      if(result.status === 200){
       localStorage.setItem('@cyber-access:access_token', result.data.access_token);  
       signInRegister();          
      }else if(result.status === 401){            
        console.log('Deu ruim');
      }
    };    
    
    if(url === ""){
      window.location.href = `https://dribbble.com/oauth/authorize?client_id=${client_id}`;              
    }else{    
      code = ValueCode(url);
      getToken();        
    }
   
    return (
      <Container id="opener">
         <LoaderComponents/>
      </Container>
    );
}

export default Loader;