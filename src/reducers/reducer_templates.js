export default function(state=[], action)
{
    switch (action.type) {

        case "TEMPLATES":

            return action.payload.templates;

        default:
            return state;
    }
}
