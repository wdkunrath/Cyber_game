const axios = require('axios');

const AuthService = {
 getAuthorize: async (client_id: string,secret_id: string, code: string) => {
    const result = await axios.post('https://cors-anywhere.herokuapp.com/https://dribbble.com/oauth/token',{
      header: {
        method: 'GET',
        header: {"Origin": "null"},
        mode: 'cors',
        cache: 'default'
      },
      params: {
        client_id: client_id,
        secret_id: secret_id,
        code: code,
        redirect_uri: 'http://localhost:3000/'
      }
    }).then(function (response: any) {
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