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

export function delete_layout(id)
{
    return {
        type: 'DELETE_LAYOUT',
        payload: {
            id
        }
    }
}

export function edit_body_width(width)
{
    return {
        type: "CHANGE_BODY_WIDTH",
        payload: {
            width
        }
    }
}

export function edit_body_background(color)
{
    return {
        type: "CHANGE_BODY_BACKGROUND",
        payload: {
            color
        }
    }
}

export function edit_body_padding(body)
{
    return {
        type: "CHANGE_PADDING",
        payload: body
    }
}

export function edit_layout(id)
{
    return {
        type: "EDIT_LAYOUT",
        payload: {
            id
        }
    }
}

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

export function dnd_items(drag_id,drop_id,layout_id,position,movement)
{
    return {
        type: "DnD_ITEMS",
        payload: {
            drag_id,
            drop_id,
            layout_id,
            position,
            movement
        }
    }
}

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