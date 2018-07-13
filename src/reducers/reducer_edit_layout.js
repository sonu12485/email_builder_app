// reducer that stores the data for layouts to be edited

// initial is false
const initState = {
    val: false,
    id: null
}

export default function(state = initState, action)
{
    switch (action.type) {
        // after edit action it becomes true and stores all the data
        case "EDIT_LAYOUT":
            return {
                val: !state.val,
                id: action.payload.id
            }
    
        default:
            return state;
    }
}
