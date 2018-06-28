const initState = {
    width: 600,
    background: '#ffffff',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0 
}

export default function(state=initState, action)
{
    
    switch (action.type) {

        case "CHANGE_BODY_WIDTH":

            const background = state.background;

            return {
                width: action.payload.width,
                background
            }

        case "CHANGE_BODY_BACKGROUND":

            const width = state.width;

            return {
                width,
                background: action.payload.color
            }

        case "CHANGE_PADDING":

            return action.payload;
    
        default:
            return state;
    }
}