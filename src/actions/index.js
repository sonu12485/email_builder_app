import _ from 'lodash';

/*
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
*/

export function addLayout(layout_type)
{
    return {
        type: 'LAYOUT_ADDED',
        payload: {
            layout_type,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addItemToLayout(data,layout_id,position,type)
{
    return {
        type: "ITEM_ADDED_TO_LAYOUT",
        payload: {
            data,
            layout_id,
            position,
            type,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addHrToLayout(layout_id,position)
{
    return {
        type: "HR_ADDED_TO_LAYOUT",
        payload: {
            layout_id,
            position,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addImageToLayout(src,layout_id,position)
{
    return {
        type: "IMAGE_ADDED_TO_LAYOUT",
        payload: {
            src,
            layout_id,
            position,
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
