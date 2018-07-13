// this reducer stores all the data/styles of the body.
// Any change you do in body changes data/styles in this reducer

// initial body data/styles
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

            return {
                ...state,
                width: action.payload.width
            }

        case "CHANGE_BODY_BACKGROUND":

            return {
                ...state,
                background: action.payload.color
            }

        case "CHANGE_PADDING":

            return {
                ...state,
                ...action.payload
            }

        // assigns body when a given template is selected
        case "ASSIGN_TEMPLATE_BODY":

            return action.payload.body;
    
        default:
            return state;
    }
}
