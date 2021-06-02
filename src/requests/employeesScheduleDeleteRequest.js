import axios from 'axios';

export const employeesScheduleDeleteRequest = async (id) =>{

    try{
        const request = await axios.delete(`http://localhost:8080/api/schedule/${id}`);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}