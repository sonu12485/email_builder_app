import _ from 'lodash';

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

export function addButtonToLayout(layout_id,position)
{
    return {
        type: "BUTTON_ADDED_TO_LAYOUT",
        payload: {
            layout_id,
            position,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addHTMLToLayout(html,layout_id,position)
{
    return {
        type: "HTML_ADDED_TO_LAYOUT",
        payload: {
            html,
            layout_id,
            position,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addIconsToLayout(layout_id,position)
{
    return {
        type: "ICONS_ADDED_TO_LAYOUT",
        payload: {
            layout_id,
            position,
            id: _.round(Math.random()*10000000000)
        }
    }
}

export function addVideoToLayout(layout_id,position)
{
    return {
        type: "VIDEO_ADDED_TO_LAYOUT",
        payload: {
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
