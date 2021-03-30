import axios from 'axios';

export const employeesGetRequest = async () =>{
    try{
        const request = await axios.get('http://localhost:8080/api/employee');
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}