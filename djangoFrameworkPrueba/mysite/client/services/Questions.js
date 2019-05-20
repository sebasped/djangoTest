

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

export async function create(item){
    var token = cookie.load("token");
    var params = {
        token: token,
        item: item,
    };
    var response = await axios.post("/polls/question/create/", params);
    return response.data;
}

export async function update(id, item){
    var token = cookie.load("token");
    var params = {
        token: token,
        item: item,
    };
    var response = await axios.post("/polls/question/update/" + id + "/", params);
    return response.data;
}

export async function del(id){
    var token = cookie.load("token");
    var params = {
        token: token,
    };
    var response = await axios.delete("/polls/question/delete/" + id + "/", params);
    return response.data;
}

