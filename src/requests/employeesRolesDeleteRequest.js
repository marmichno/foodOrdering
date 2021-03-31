import axios from 'axios';

export const employeesRolesDeleteRequest = async (id) =>{
    try{
        const request = await axios.delete(`http://localhost:8080/api/role/${id}`);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}