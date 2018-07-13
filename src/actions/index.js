import _ from 'lodash';

// this action handles adding of layout comtainer
// (goes to reducer_items)
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


// this action handles adding of heading/sub-heading/paragraph to a layout
// (goes to reducer_items)
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

// this action handles adding of HR to a layout
// (goes to reducer_items)
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

// this action handles adding of image to a layout
// (goes to reducer_items)
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

// this action handles adding of button to a layout
// (goes to reducer_items)
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

// this action handles adding of HTML component to a layout
// (goes to reducer_items)
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

// this action handles adding of social-media-icons to a layout
// (goes to reducer_items)
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

// this action handles adding of video to a layout
// (goes to reducer_items)
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

// update action to update the whole app so as to implement live reload functionality
// (goes to reducer_update)
export function update()
{
    return {
        type: 'UPDATE'
    }
}
