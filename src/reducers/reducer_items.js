const initStyle = {
    fontSize: '',
    color: '#000000',
    backgroundColor: '#ffffff',
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

const initLayoutStyles = {
    backgroundColor: '#ffffff',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
}

export default function( state=[], action )
{
    console.log(action);
    let x;

    switch (action.type) {

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
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
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
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
                }
            });

            return state;

        case "EDIT_P_DATA":
            
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
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.data = action.payload.data; 
                            }
                        });
                    }
                }
            });

            return state;

        case "EDIT_IMG_SRC":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        item.left.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.src = action.payload.src; 
                            }
                        });
                    }
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.src = action.payload.src; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.src = action.payload.src; 
                            }
                        });
                    }
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
                    else if(action.payload.position === 'right')
                    {
                        x = item.right.filter( component => {
                            return action.payload.id !== component.id
                        });

                        item.right = x;
                    }
                    else if(action.payload.position === 'center')
                    {
                        x = item.center.filter( component => {
                            return action.payload.id !== component.id
                        });

                        item.center = x;
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
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.styles = action.payload.styles; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
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
            
            if(action.payload.layout_type === 0)
            {
                return state.concat([{
                    type:"layout", 
                    layout_type: action.payload.layout_type,
                    id: action.payload.id ,
                    center: [],
                    centerHTML: '',
                    styles: initLayoutStyles
                }]);
            }
            else if(
                action.payload.layout_type === 1 || 
                action.payload.layout_type === 3 || 
                action.payload.layout_type === 4
            )
            {
                return state.concat([{
                    type:"layout", 
                    layout_type: action.payload.layout_type,
                    id: action.payload.id ,
                    left: [],
                    right: [],
                    leftHTML: '',
                    rightHTML: '',
                    styles: initLayoutStyles
                }]);
            }
            else if(action.payload.layout_type === 2)
            {
                return state.concat([{
                    type:"layout", 
                    layout_type: action.payload.layout_type,
                    id: action.payload.id ,
                    left: [],
                    center: [],
                    right: [],
                    leftHTML: '',
                    centerHTML: '',
                    rightHTML: '',
                    styles: initLayoutStyles
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
                    else if(action.payload.position === "right")
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
                    else if(action.payload.position === "center")
                    {
                        item.center.push({
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
                    else if(action.payload.position === "right")
                    {
                        item.right.push({
                            type:"hr", 
                            id: action.payload.id, 
                            styles: [],
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "center")
                    {
                        item.center.push({
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
                    else if(action.payload.position === "right")
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
                    else if(action.payload.position === "center")
                    {
                        item.center.push({
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
                    else if(action.payload.position === "right")
                    {
                        item.rightHTML = action.payload.html;
                    }
                    else if(action.payload.position === "center")
                    {
                        item.centerHTML = action.payload.html;
                    }
                }
            });

            return state;

        case 'DELETE_LAYOUT':
            
            return state.filter( item => {
                return item.id !== action.payload.id
            });

        case 'EDIT_LAYOUT_STYLES':

            state.forEach( item => {
                if(item.id === action.payload.id)
                {
                    item.styles = action.payload.styles
                }
            });

            return state;
    
        default:
            return state;
    }
}