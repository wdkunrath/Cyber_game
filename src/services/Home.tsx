import { Axios } from './Axios';

const HomeService = {
    getList: async () =>{
        const result = Axios.get('user/shots')
        .then(({ ...response }) => {
            return response;
        })
        .catch(({ response }) => {
            return response;
          });

        return result;
    }
};

export default HomeService;