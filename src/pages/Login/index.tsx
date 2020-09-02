import React, {  useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';  
import ILogo from '../../assets/image/logoLogin.svg';
import Button from '../../components/Button';

import { 
    Container,
    Logo,
    Form
} from './styles';


const Login: React.FC = ({}) => { 
    const { signIn } = useAuth();
        
    return ( 
        <Container>
            <Logo>
                <img src={ILogo} alt="LogoLogin" />
            </Logo>

            <Form onSubmit={() => signIn()}>              
               <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
}

export default Login;