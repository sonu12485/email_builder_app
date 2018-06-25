const initStyle = {
    fontSize: '',
    color: '',
    backgroundColor: '',
    fontFamily: 'sans-serif',
    fontWeight: '',
    fontStyle: '',
    textDecoration: '',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
};

export default function( state=[], action )
{
    console.log(action);

    switch (action.type) {
        case "HEADING_ADDED":
            return state.concat([{
                type:"h1", 
                data: action.payload.data, 
                styles: initStyle,
                id: action.payload.id 
            }]);

        case "SUB_HEADING_ADDED":
            return state.concat([{
                type:"h3", 
                data: action.payload.data, 
                styles: initStyle,
                id: action.payload.id 
            }]);

        case "HR_ADDED":
            return state.concat([{
                type:"hr", 
                id: action.payload.id, 
                styles: [],
            }]);

        case "PARAGRAPH_ADDED":
            return state.concat([{
                type:"p", 
                data: action.payload.data, 
                styles: initStyle,
                id: action.payload.id 
            }]);

        case "IMAGE_ADDED": 
            return state.concat([{
                type:"img", 
                src: action.payload.src, 
                styles: [],
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

            const filtredItems = state.filter( item => {
                return action.payload.id !== item.id
            });

            return filtredItems;

        case "EDIT_STYLES":

            state.forEach( item => {
                if(item.id === action.payload.id)
                {
                    item.styles = action.payload.styles;
                }
            });

            return state;

        case "SLIDE_ITEM_UP":
            
            const selectedItemIndex = state.findIndex( (item) => {
                return item.id === action.payload.id
            });

            const removedItem = state.splice(selectedItemIndex,1)[0];

            state.splice(selectedItemIndex-1,0,removedItem);

            return state;

        case "SLIDE_ITEM_DOWN":

            const selectedItemIndex1 = state.findIndex( (item) => {
                return item.id === action.payload.id
            });

            const removedItem1 = state.splice(selectedItemIndex1,1)[0];

            state.splice(selectedItemIndex1+1,0,removedItem1);

            return state;
    
        default:
            return state;
    }
}