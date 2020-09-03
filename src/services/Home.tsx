import { Axios } from './Axios';

const HomeService = {
    getList: async () =>{
        const result = await Axios.get('user/shots')
        .then(({ ...response }) => {
            if(response.status === 200){
                return response;
            }
        })
        .catch(({ response }) => {
            return response;
          });

        return result;
    }
};

export default HomeService;