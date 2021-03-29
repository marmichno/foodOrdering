import axios from 'axios';

export const employeesRolesPostRequest = async (role) => {
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify(role);

    try{
        const request = await axios.post('http://localhost:8080/api/role',body,config);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}