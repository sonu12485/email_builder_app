// reducer that stores the data for images to be edited

// initial is false
const initState = {
    val: false,
    id: null
}

export default function(state=initState, action)
{

    switch (action.type) {
        // after edit action it becomes true and stores all the data
        case "EDIT_IMG":
            return {
                val: !state.val,
                id: action.payload.id,
                layout_id: action.payload.layout_id,
                position: action.payload.position
            };
    
        default:
            return state;
    }
}
