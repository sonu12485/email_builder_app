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
    let x;

    switch (action.type) {
        /*
        case "HEADING_ADDED":
            return state.concat([{
                type:"h1", 
                data: action.payload.data, 
                styles: initStyle,
                id: action.payload.id,
                layout_id: null,
                position: null 
            }]);

        case "SUB_HEADING_ADDED":
            return state.concat([{
                type:"h3", 
                data: action.payload.data, 
                styles: initStyle,
                id: action.payload.id,
                layout_id: null,
                position: null 
            }]);

        case "HR_ADDED":
            return state.concat([{
                type:"hr", 
                id: action.payload.id, 
                styles: [],
                layout_id: null,
                position: null 
            }]);

        case "PARAGRAPH_ADDED":
            return state.concat([{
                type:"p", 
                data: action.payload.data, 
                styles: initStyle,
                id: action.payload.id,
                layout_id: null,
                position: null 
            }]);

        case "IMAGE_ADDED": 
            return state.concat([{
                type:"img", 
                src: action.payload.src, 
                styles: [],
                id: action.payload.id,
                layout_id: null,
                position: null 
            }]);
        */

        case "EDIT_H1_DATA":
            
            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        item.left.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
                    else
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
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

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        x = item.left.filter( component => {
                            return action.payload.id !== component.id
                        });

                        item.left = x;
                    }
                    else
                    {
                        x = item.right.filter( component => {
                            return action.payload.id !== component.id
                        });

                        item.right = x;
                    }
                }
            });

            return state;

        case "EDIT_STYLES":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        item.left.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.styles = action.payload.styles; 
                            }
                        });
                    }
                    else
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.styles = action.payload.styles; 
                            }
                        });
                    }
                }
            });

            return state;

        /*
        case "SLIDE_ITEM_UP":
            
            const selectedItemIndex = state.findIndex( (item) => {
                return item.id === action.payload.id
            });

            if(selectedItemIndex === 0)
            {
                return state;
            }
            else
            {
                const removedItem = state.splice(selectedItemIndex,1)[0];

                state.splice(selectedItemIndex-1,0,removedItem);

                return state;
            }

        case "SLIDE_ITEM_DOWN":

            const selectedItemIndex1 = state.findIndex( (item) => {
                return item.id === action.payload.id
            });

            const removedItem1 = state.splice(selectedItemIndex1,1)[0];

            state.splice(selectedItemIndex1+1,0,removedItem1);

            return state;
        */

        case "LAYOUT_ADDED":
            
            if(action.payload.layout_type === 1)
            {
                return state.concat([{
                    type:"layout", 
                    layout_type: action.payload.layout_type,
                    id: action.payload.id ,
                    left: [],
                    right: [],
                    leftHTML: '',
                    rightHTML: ''
                }]);
            }

        case "ITEM_ADDED_TO_LAYOUT":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type: action.payload.type, 
                            data: action.payload.data, 
                            styles: initStyle,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else
                    {
                        item.right.push({
                            type: action.payload.type, 
                            data: action.payload.data, 
                            styles: initStyle,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                }
            });

            return state;

        case "HR_ADDED_TO_LAYOUT":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type:"hr", 
                            id: action.payload.id, 
                            styles: [],
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else
                    {
                        item.right.push({
                            type:"hr", 
                            id: action.payload.id, 
                            styles: [],
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                }
            });

            return state;

        case "IMAGE_ADDED_TO_LAYOUT":
            
            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type:"img", 
                            src: action.payload.src, 
                            styles: [],
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else
                    {
                        item.right.push({
                            type:"img", 
                            src: action.payload.src, 
                            styles: [],
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                }
            });

            return state;

        case "EDIT_LAYOUT_HTML":
            
            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.leftHTML = action.payload.html;
                    }
                    else
                    {
                        item.rightHTML = action.payload.html;
                    }
                }
            });

            return state;
    
        default:
            return state;
    }
}