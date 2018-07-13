// these actions handle all the auth stuff like register and login 

import axios from 'axios';
import _ from 'lodash';

// this action handles registration of a user 
export function register(username, email, password)
{
    return dispatch => {

        axios({
            url: '/register',
            method: "post",
            headers:{
                'Content-Type': 'application/json'
            },
            data:{
                username, 
                email, 
                password
            }
        })
        .then( res => {
            alert("Registration Successful!");
        })
        .catch( err => {
            alert(err);
        });

    }
}

// this action handles login of a user
export function login(email, password)
{
    return dispatch => {
        
                axios({
                    url: '/login',
                    method: "post",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    data:{
                        email, 
                        password
                    }
                })
                .then( res => {
                    const iat = _.round(new Date().getTime() / 1000);
                    const expiresIn = 86400;
                    const token = res.data.token;

                    localStorage.setItem('token', token);
                    localStorage.setItem('expiresIn', expiresIn);
                    localStorage.setItem('iat', iat);
                    window.location.assign('/home');
                })
                .catch( err => {
                    alert(err);
                    window.location.assign('/');
                });
        
            }
}
