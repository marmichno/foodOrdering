import axios from 'axios';

export const employeesSchedulePostRequest = async (date, shiftId, employeeId) => {

    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    const body = JSON.stringify({
        "date":date,
        "shiftEntity":{
            "id":parseInt(shiftId)
        },
        "employeeEntity":{
            "id":parseInt(employeeId)
        }
    });

    try{
        const request = await axios.post('http://localhost:8080/api/schedule', body, config);
        const response = await request.data;
        return response;
    }catch(error){
        console.log(error);
    }
}