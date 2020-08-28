import React from 'react';
import { 
    Container, 
    Grid, 
    Profile, 
    Title, 
    LogoCircle,
    Logo
} from './styles';
import ILogoCircle from '../../assets/image/logoCircle.png';
import ILogo from '../../assets/image/logo.png';
import { useAuth } from '../../hooks/auth';

const MainHeader: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Grid>
        <Container>
            <Logo alt="logo" src={ILogo} />

            <Profile>
                <Title>CYBER GAMER <span><a onClick={signOut}>, Sair!</a></span></Title>
                <LogoCircle alt="logoCircle" src={ILogoCircle}/>
            </Profile>
        </Container>
    </Grid>
  );
}

export default MainHeader;