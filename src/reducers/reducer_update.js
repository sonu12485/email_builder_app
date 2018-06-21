export default function( state=false, action )
{
    switch (action.type) {
        case "UPDATE":
            return !state;
    
        default:
            return state;
    }
}