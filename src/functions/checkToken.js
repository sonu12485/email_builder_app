import _ from 'lodash';

function checkTime()
{
    const sec = _.round(new Date().getTime() / 1000);

    if((sec - localStorage.getItem('iat')) < localStorage.getItem('expiresIn') )
    {
        return true;
    }
    else
    {   
        return false;
    }
}

export default function checkToken()
{
    if(!localStorage.getItem('token'))
    {
        return false;
    }
    else
    {
        if(!checkTime())
        {
            localStorage.removeItem('token');
            localStorage.removeItem('expiresIn');
            localStorage.removeItem('iat');
            return false;
        }
        else
        {
            return true;
        }
    }
}