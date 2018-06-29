const initState = {
    val: false,
    id: null
}

export default function(state = initState, action)
{
    switch (action.type) {
        case "EDIT_LAYOUT":
            return {
                val: !state.val,
                id: action.payload.id
            }
    
        default:
            return state;
    }
}
