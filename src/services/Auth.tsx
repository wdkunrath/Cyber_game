import { Cors } from './Axios';
import { AxiosResponse } from "axios";

const AuthService = {
 getAuthorize: async (client_id: string,secret_id: string, code: string) => {
    const result = await Cors.post('/https://dribbble.com/oauth/token',{      
      params: {
        client_id:client_id,
        client_secret:secret_id,
        code:code,
        redirect_uri: "http://localhost:3000/login-response"
      }
    }).then(function (response: AxiosResponse ) {
      // handle success
      console.log(response);
    })
    .catch(function (error:any) {
      // handle error
      console.log(error);
    });

    return result;
  }
};

export default AuthService;