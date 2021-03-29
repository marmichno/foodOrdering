import axios from 'axios';

export const groupPostRequest = async (name) => {

    console.log(name);

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify(
        {
            "name":name
        }
    )

    try{
        const request = await axios.post('http://localhost:8080/api/group', body, config);
        let response = await request;
        return response;
    }catch(error){
        console.log(error);
    }

    
}