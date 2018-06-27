const initState = {
    val: false,
    id: null
}

export default function(state=initState, action)
{
    
    switch (action.type) {
        case "EDIT_H1":
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
