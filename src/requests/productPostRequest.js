import axios from 'axios';

export const productPostRequest = async (product) =>{

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify(product);

    try{
        const request = await axios.post('http://localhost:8080/api/product', body, config);
        const response = await request.data;
    }catch(error){
        console.log(error);
    }
}