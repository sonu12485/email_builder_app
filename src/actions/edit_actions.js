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