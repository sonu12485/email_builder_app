import axios from 'axios';

// this action saves a template
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

// this action fetches all the templates
// (goes to reducer_templates)
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

// this action deletes template
// (goes to reducer_templates)
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
