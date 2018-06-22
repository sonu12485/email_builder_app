export default function( state=[], action )
{
    console.log(action);

    switch (action.type) {
        case "HEADING_ADDED":
            return state.concat([{
                type:"h1", 
                data: action.payload.data, 
                id: action.payload.id 
            }]);

        case "SUB_HEADING_ADDED":
            return state.concat([{
                type:"h3", 
                data: action.payload.data, 
                id: action.payload.id 
            }]);

        case "HR_ADDED":
            return state.concat([{
                type:"hr", 
                id: action.payload.id 
            }]);

        case "PARAGRAPH_ADDED":
            return state.concat([{
                type:"p", 
                data: action.payload.data, 
                id: action.payload.id 
            }]);

        case "IMAGE_ADDED": 
            return state.concat([{
                type:"img", 
                src: action.payload.src, 
                id: action.payload.id 
            }]);

        case "EDIT_H1_DATA":
            
            state.forEach( item => {
                if(item.id === action.payload.id)
                {
                    item.data = action.payload.data; 
                }
            });

            return state;

        case "EDIT_H3_DATA":
            
            state.forEach( item => {
                if(item.id === action.payload.id)
                {
                    item.data = action.payload.data; 
                }
            });

            return state;

        case "EDIT_P_DATA":
            
            state.forEach( item => {
                if(item.id === action.payload.id)
                {
                    item.data = action.payload.data; 
                }
            });

            return state;

        case "EDIT_IMG_SRC":

            state.forEach( item => {
                if(item.id === action.payload.id)
                {
                    item.src = action.payload.src; 
                }
            });

            return state;

        case "DELETE":
            const id = action.payload.id;

            const filtredItems = state.filter( item => {
                return id !== item.id
            });

            return filtredItems;
    
        default:
            return state;
    }
}