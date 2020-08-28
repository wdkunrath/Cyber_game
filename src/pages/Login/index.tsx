import React from 'react';

import ILogo from '../../assets/image/logoLogin.svg'
import Button from '../../components/Button';;
import { 
    Container,
    Logo,
    Form
} from './styles';

import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
    const client_id="6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0";
    const secret_id="9a4343a04969945b043e6c28d1f95c91444372a8f140961e346a331cea7805fd";    

    const { signIn } = useAuth(); 
    
    return (
        <Container>
            <Logo>
                <img src={ILogo} alt="LogoLogin" />
            </Logo>

            <Form onSubmit={() => signIn(client_id,secret_id)}>              
               <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    );
}

export default Login;