import axios from 'axios';

export const employeesShiftDeleteRequest = async (id) => {

    try{
        const request = await axios.delete(`http://localhost:8080/api/shift/${id}`);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}