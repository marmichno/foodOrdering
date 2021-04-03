import axios from 'axios';

export const employeesShiftPostRequest = async (shift) =>{

    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    
    const body = JSON.stringify(shift);

    try{
        const request = await axios.post('http://localhost:8080/api/shift', body, config);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}