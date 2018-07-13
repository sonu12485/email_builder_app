// this is a flag reducer implemented so as to update the whole app when components are edited
// thereby enabling the live reload functionality

export default function( state=false, action )
{
    switch (action.type) {
        case "UPDATE":
            return !state;
    
        default:
            return state;
    }
}