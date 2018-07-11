import axios from 'axios';

export function saveTemplate(name,data,body)
{
    return dispatch => {

        axios({
            method: 'post',
            url: '/save',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                name,
                data,
                body,
                default: false
            }
        })
        .then( (res) => {
            alert("Template Saved");
        })
        .catch( (err) => {
            alert(err);
        });

    }
}

export function getTemplates()
{
    return dispatch => {

        axios({
            method: 'post',
            url: '/templates',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( (res) => {

            dispatch({
                type: 'TEMPLATES',
                payload: {
                    templates: res.data
                }
            });
        })
        .catch( (err) => {
            console.log(err);
        });

    }
}

export function deleteTemplate(name)
{
    return dispatch => {

        axios({
            method: 'post',
            url: '/delete',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                name
            }
        })
        .then( (res) => {

            dispatch({
                type: 'TEMPLATES',
                payload: {
                    templates: res.data
                }
            });
        })
        .catch( (err) => {
            console.log(err);
        });

    }
}
