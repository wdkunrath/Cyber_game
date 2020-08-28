import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Cyber from './styles/themes/cyber';
import Routes from './routes';

const App: React.FC = () => {
    
    return (
        <ThemeProvider theme={Cyber}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;