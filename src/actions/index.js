import _ from 'lodash';

export function addHeading(data)
{
    return {
        type: 'HEADING_ADDED',
        payload: {
            data,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addSubHeading(data)
{
    return {
        type: 'SUB_HEADING_ADDED',
        payload: {
            data,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addhr()
{
    return {
        type: "HR_ADDED",
        payload: {
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addParagraph(data)
{
    return {
        type: 'PARAGRAPH_ADDED',
        payload: {
            data,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addImage(src)
{
    return {
        type: 'IMAGE_ADDED',
        payload: {
            src,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function update()
{
    return {
        type: 'UPDATE'
    }
}
