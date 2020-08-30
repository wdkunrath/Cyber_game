import { Cors } from './Axios';

const AuthService = {
 getAuthorize: async (client_id: string,secret_id: string, code: string) => {
    const result = await Cors.post('/https://dribbble.com/oauth/token',{      
      params: {
        client_id:client_id,
        client_secret:secret_id,
        code:code,
        redirect_uri: 'http://localhost:3000/login-response'
      }
    }).then(({ ...response }) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

    return result;
  }
};

export default AuthService;