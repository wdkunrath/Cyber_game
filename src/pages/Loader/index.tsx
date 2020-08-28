import React,{ useEffect } from 'react';
import LoaderComponents from '../../components/Loader';

import { IRouteParams } from '../../interfaces/RouteContext';
import { Container } from './styles';

const Loader: React.FC<IRouteParams> = ({ match }) => { 
   const movimentType = match.params.code;
   
    return (
      <Container>
         <LoaderComponents/>
         {movimentType}
      </Container>
    );
}

export default Loader;