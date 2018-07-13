import _ from 'lodash';

// this action stores the data of the heading to be edited 
// (goes to reducer_edit_h1)
export function edit_h1(id, layout_id, position)
{
    return {
        type: "EDIT_H1",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles editing data of a given heading component
// (goes to reducer_items)
export function edit_h1_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_H1_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}

// this action stores the data of the sub-heading to be edited 
// (goes to reducer_edit_h3)
export function edit_h3(id, layout_id, position)
{
    return {
        type: "EDIT_H3",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles editing data of a given sub-heading component
// (goes to reducer_items)
export function edit_h3_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_H3_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}

// this action handles deleting of components
// (goes to reducer_items)
export function delete_item(id,layout_id,position)
{
    return {
        type: "DELETE",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action stores the data of the HR to be edited 
// (goes to reducer_edit_hr)
export function edit_hr(id, layout_id, position)
{
    return {
        type: "EDIT_HR",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action stores the data of the paragraph to be edited 
// (goes to reducer_edit_p)
export function edit_p(id, layout_id, position)
{
    return {
        type: "EDIT_P",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles editing data of a given paragraph component
// (goes to reducer_items)
export function edit_p_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_P_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}

// this action stores the data of the image to be edited 
// (goes to reducer_edit_img)
export function edit_img(id, layout_id, position)
{
    return {
        type: "EDIT_IMG",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles editing src of a given image component
// (goes to reducer_items)
export function edit_img_src(id, src, layout_id, position)
{
    return {
        type: "EDIT_IMG_SRC",
        payload: {
            id,
            src,
            layout_id,
            position
        }
    }
}

// this action handles editing link of a given image component
// (goes to reducer_items)
export function edit_img_link(id, link, layout_id, position)
{
    return {
        type: "EDIT_IMG_LINK",
        payload: {
            id,
            link,
            layout_id,
            position
        }
    }
}

// this action handles editing styles of a given heading/sub-haeding/paragraph component
// (goes to reducer_items)
export function edit_styles(id, styles, layout_id, position)
{
    return {
        type: "EDIT_STYLES",
        payload: {
            id,
            styles,
            layout_id,
            position
        }
    }
}

// this action handles the editing of the HTML equivalent of a column of a given layout
// (goes to reducer_items)
export function edit_layout_HTML(html, layout_id, position)
{
    return {
        type: 'EDIT_LAYOUT_HTML',
        payload: {
            html,
            layout_id,
            position
        }
    }
}

// this handles deleting of a given layout
// (goes to reducer_items)
export function delete_layout(id)
{
    return {
        type: 'DELETE_LAYOUT',
        payload: {
            id
        }
    }
}

// this handles editing of body width
// (goes to reducer_body)
export function edit_body_width(width)
{
    return {
        type: "CHANGE_BODY_WIDTH",
        payload: {
            width
        }
    }
}

// this handles editing of body background
// (goes to reducer_body)
export function edit_body_background(color)
{
    return {
        type: "CHANGE_BODY_BACKGROUND",
        payload: {
            color
        }
    }
}

// this handles editing of body padding
// (goes to reducer_body)
export function edit_body_padding(body)
{
    return {
        type: "CHANGE_PADDING",
        payload: body
    }
}

// this action stores the data of the layout to be edited 
// (goes to reducer_edit_layout)
export function edit_layout(id)
{
    return {
        type: "EDIT_LAYOUT",
        payload: {
            id
        }
    }
}

// this action handles the editing of styles of a given layout
// (goes to reducer_items)
export function edit_layout_styles(id, styles)
{
    return {
        type: "EDIT_LAYOUT_STYLES",
        payload: {
            id,
            styles
        }
    }
}

// this action stores the data of the button to be edited 
// (goes to reducer_edit_btn)
export function edit_btn(id, layout_id, position)
{
    return {
        type: "EDIT_BTN",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles the editing of data of a given button
// (goes to reducer_items)
export function edit_btn_data(id, data, layout_id, position)
{
    return {
        type: "EDIT_BTN_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}

// this action handles drag and drop of components 
// (goes to reducer_items)
export function dnd_items(
    drag_id,drop_id,drag_layout_id,drag_position,drop_layout_id,drop_position,movement
)
{
    return {
        type: "DnD_ITEMS",
        payload: {
            drag_id,
            drop_id,
            drag_layout_id,
            drag_position,
            drop_layout_id,
            drop_position,
            movement
        }
    }
}

// this action stores the data of the HTML component to be edited 
// (goes to reducer_edit_html)
export function edit_HTML(id, layout_id, position)
{
    return {
        type: "EDIT_HTML",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles the editing of data of a given html component
// (goes to reducer_items)
export function edit_HTML_data(id,html,layout_id,position)
{
    return {
        type: "EDIT_HTML_DATA",
        payload: {
            id,
            html,
            layout_id,
            position
        }
    }
}

// this action stores the data of the social-media-icons component to be edited 
// (goes to reducer_edit_icons)
export function edit_icons(id, layout_id, position)
{
    return {
        type: "EDIT_ICONS",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles the editing of data of a given social-media-icons component
// (goes to reducer_items)
export function edit_icons_data(id,data,layout_id,position)
{
    return {
        type: "EDIT_ICONS_DATA",
        payload: {
            id,
            data,
            layout_id,
            position
        }
    }
}

// this action handles duplicating of components
// (goes to reducer_items)
export function duplicate_item(id,layout_id,position)
{
    return {
        type: "DUPLICATE_ITEM",
        payload: {
            id,
            layout_id,
            position,
            new_item_id: _.round(Math.random()*10000000000)
        }
    }
}

// this action handles duplicating of layouts
// (goes to reducer_items)
export function duplicate_layout(id)
{
    return {
        type: "DUPLICATE_LAYOUT",
        payload: {
            id,
            new_layout_id: _.round(Math.random()*10000000000)
        }
    }
}

// this action handles adding a image to store
// (goes to reducer_image_store)
export function add_image_to_store(name,url)
{
    return {
        type: "ADD_STORE_IMAGE",
        payload: {
            name,
            url
        }
    }
}

// this action handles deleting a image from the store
// (goes to reducer_image_store)
export function delete_image_from_store(id)
{
    return {
        type: "DELETE_STORE_IMAGE",
        payload: {
            id
        }
    }
}

// this action handles image rotate
// (goes to reducer_items)
export function image_rotate(id,val,layout_id,position)
{
    return {
        type: "IMAGE_ROTATE",
        payload: {
            id,
            val,
            layout_id,
            position
        }
    }
}

// this action handles assignment of a template data
// (goes to reducer_items)
export function assign_template(data)
{
    return {
        type: "ASSIGN_TEMPLATE",
        payload: {
            data
        }
    }
}

// this action handles assignment of a template body data
// (goes to reducer_items)
export function assign_template_body(body)
{
    return {
        type: "ASSIGN_TEMPLATE_BODY",
        payload: {
            body
        }
    }
}

// this action stores the data of the video component to be edited 
// (goes to reducer_edit_video)
export function edit_video(id,layout_id,position)
{
    return {
        type: "EDIT_VIDEO",
        payload: {
            id,
            layout_id,
            position
        }
    }
}

// this action handles the editing of url of a given video component
// (goes to reducer_items)
export function edit_video_url(id,layout_id,position,data)
{
    return {
        type: "EDIT_VIDEO_URL",
        payload: {
            id,
            layout_id,
            position,
            data
        }
    }
}

// not used
/*
export function slide_item_up(id)
{
    return {
        type: "SLIDE_ITEM_UP",
        payload: {
            id
        }
    }
}

export function slide_item_down(id)
{
    return {
        type: "SLIDE_ITEM_DOWN",
        payload: {
            id
        }
    }
}
*/
