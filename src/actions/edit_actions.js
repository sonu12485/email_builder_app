export function edit_h1(id)
{
    return {
        type: "EDIT_H1",
        payload: {
            id
        }
    }
}

export function edit_h1_data(id, data)
{
    return {
        type: "EDIT_H1_DATA",
        payload: {
            id,
            data
        }
    }
}

export function edit_h3(id)
{
    return {
        type: "EDIT_H3",
        payload: {
            id
        }
    }
}

export function edit_h3_data(id, data)
{
    return {
        type: "EDIT_H3_DATA",
        payload: {
            id,
            data
        }
    }
}

export function delete_item(id)
{
    return {
        type: "DELETE",
        payload: {
            id
        }
    }
}

export function edit_hr(id)
{
    return {
        type: "EDIT_HR",
        payload: {
            id
        }
    }
}

export function edit_p(id)
{
    return {
        type: "EDIT_P",
        payload: {
            id
        }
    }
}

export function edit_p_data(id, data)
{
    return {
        type: "EDIT_P_DATA",
        payload: {
            id,
            data
        }
    }
}

export function edit_img(id)
{
    return {
        type: "EDIT_IMG",
        payload: {
            id
        }
    }
}


export function edit_img_src(id, src)
{
    return {
        type: "EDIT_IMG_SRC",
        payload: {
            id,
            src
        }
    }
}

export function edit_styles(id, styles)
{
    return {
        type: "EDIT_STYLES",
        payload: {
            id,
            styles
        }
    }
}
