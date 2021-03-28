import axios from 'axios';

export const productGetRequest = async () =>{
    try{
        const request = await axios.get('http://localhost:8080/api/product');
        const response =  await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}