import axios from 'axios';
import cookie from 'react-cookies';


export async function authenticate(username, password){
    return {
        authenticated: true,
        token: null,
    }; 
}
