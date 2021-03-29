import axios from 'axios';

export const employeesRolesGetRequest = async () =>{
    try{
        const request = await axios.get('http://localhost:8080/api/role');
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}