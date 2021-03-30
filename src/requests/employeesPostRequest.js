import axios from 'axios';

export const employeesPostRequest = async (employee) => {
    console.log(employee);

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify(employee);

    try{
        const request = await axios.post("http://localhost:8080/api/employee",body,config);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}