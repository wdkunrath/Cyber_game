const axios = require('axios');

const AuthService = {
  getAuthorize: async (client_id: string,secret_id: string, code: string) => {
    var teste = {
      method: 'post',
      url: `https://cors-anywhere.herokuapp.com/https://dribbble.com/oauth/token?client_id=${client_id}&client_secret=${secret_id}&code=${code}&redirect_uri=http://localhost:3000/login-response`,
      headers: { 
        'mode': 'cors', 
        'origin': 'http://localhost:3000/'
      }
    }

    const result = await axios(teste);

    return result;
  }

  //   const resultado = await Cors.post('',{params:{
  //     client_id:client_id,
  //     client_secret:secret_id,
  //     code:code,
  //     redirect_uri:'http://localhost:3000/login-response'
  //   }
  //   }).then(({ ...response }) => {
  //     return response;
  //   })
  //   .catch(({ response }) => {
  //       return response;
  //   });

  // return resultado;
}

export default AuthService;