

import axios from 'axios';
import cookie from 'react-cookies';

export async function fetchAll(){
    var token = cookie.load("token");
    var params = {
        token: token
    };
    var response = await axios.get("/polls/questions", {
        params: params
    });
    return response.data;
}


export async function fetch(id){
    var token = cookie.load("token");
    var params = {
        token: token
    };
    var response = await axios.get("/polls/question/" + id, {
        params: params
    });
    return response.data;
}



