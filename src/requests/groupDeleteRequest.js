import axios from 'axios';

export const groupDeleteRequest = async (id) =>{
    console.log(id);

    try{
        const request = await axios.delete(`http://localhost:8080/api/group/${id}`);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}