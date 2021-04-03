import axios from 'axios';

export const employeesShiftGetRequest = async () => {
    try{
        const request = await axios.get('http://localhost:8080/api/shift');
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}