// this reducer stores all the templates of a user returned from the API 

export default function(state=[], action)
{
    switch (action.type) {

        case "TEMPLATES":

            return action.payload.templates;

        default:
            return state;
    }
}
