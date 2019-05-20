import axios from 'axios';
import cookie from 'react-cookies';


export async function authenticate(username, password){
    var params = {
        username: username,
        password: password,
    }  
    var response = await axios.post("/polls/authenticate/", params);  
    var data = response.data;
    return data;
}
