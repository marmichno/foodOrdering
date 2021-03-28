import axios from 'axios';

export const groupGetRequest = async () => {

    try{
        const request = await axios.get('http://localhost:8080/api/group');
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}