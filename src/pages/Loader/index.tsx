import React, { useState } from 'react';
import LoaderComponents from '../../components/Loader';
import { Container } from './styles';
import AuthService from '../../services/Auth';
import { useAuth } from '../../hooks/auth';

const Loader: React.FC = () => {
    const [token,setToken] = useState('');
    const client_id="6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0";
    const secret_id="9a4343a04969945b043e6c28d1f95c91444372a8f140961e346a331cea7805fd";
    const url = window.location.search;
    var code = '';
    const { signInRegister } = useAuth();
    
    function ValueCode(params: string){  
      let cod = params.split('=');   
      return cod[1];
    }

    let getToken = async () =>{
      const result = await AuthService.getAuthorize(client_id, secret_id, code);
      console.log(result);
     //setToken(result);
    };
    
    setTimeout(() => {
      if(url === ""){
        window.location.href = `https://dribbble.com/oauth/authorize?client_id=${client_id}`;              
      }else{    
        code = ValueCode(url);
        getToken();
        //console.log(token);
  
        // signInRegister(token);
      }
    }, 1500);

    return (
      <Container>
         <LoaderComponents/>
      </Container>
    );
}

export default Loader;