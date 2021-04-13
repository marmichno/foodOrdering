import axios from 'axios';

export const productGetByIdRequest = async (id) => {
    try{
        const request = await axios.get(`http://localhost:8080/api/product/${id}`);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}