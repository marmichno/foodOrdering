import axios from 'axios';

export const employeesScheduleGetRequest = async (year, month) => {

    try{
        const request = await axios.get(`http://localhost:8080/api/schedule/${year}/${month + 1}`);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}