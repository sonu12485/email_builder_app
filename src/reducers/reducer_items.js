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

const initImageStyle = {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fullWidth: false
}

const initLayoutStyles = {
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
}

const btnData = {
    name: 'Button',
    url: '#',
    color: 'primary',
    size: '',
    block: false,
    alignment: 'center',
    target: '',
    style: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    }
}

const socialMediaIconsData = {
    icons: [ 
        "facebook", "twitter", "linkedin", "youtube", "google", "github", "instagram" 
    ],
    iconsLeft: [],
    colors: {
        facebook: "#3b5998", 
        twitter: "#00aced", 
        linkedin: "#007bb6", 
        youtube: "#bb0000", 
        google: "#dd4b39", 
        github: "#333", 
        instagram: "#bc2a8d"
    },
    size: "default",
    layout: "row",
    alignment: "center",
    color: "default",
    colorValue: '#aaa',
    link: {
        facebook: "#", 
        twitter: "#", 
        linkedin: "#", 
        youtube: "#", 
        google: "#", 
        github: "#", 
        instagram: "#"
    }
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

        case "EDIT_IMG_LINK":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        item.left.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.link = action.payload.link; 
                            }
                        });
                    }
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.link = action.payload.link; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.link = action.payload.link; 
                            }
                        });
                    }
                }
            });

            return state;

        case "IMAGE_ROTATE":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        item.left.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.rotate = component.rotate + action.payload.val;
                            }
                        });
                    }
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.rotate = component.rotate + action.payload.val;
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.rotate = component.rotate + action.payload.val;
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

            let initialStyle = {
                ...initStyle
            };

            if(action.payload.type === 'h1')
            {
                initialStyle["fontSize"] = 38;
            }
            else if(action.payload.type === 'h3')
            {
                initialStyle["fontSize"] = 26;
            }
            else
            {
                initialStyle["fontSize"] = 16;
            }

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type: action.payload.type, 
                            data: action.payload.data, 
                            styles: initialStyle,
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
                            styles: initialStyle,
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
                            styles: initialStyle,
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
                            link: '',
                            rotate: 0,
                            styles: initImageStyle,
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
                            link: '',
                            rotate: 0,
                            styles: initImageStyle,
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
                            link: '',
                            rotate: 0,
                            styles: initImageStyle,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                }
            });

            return state;

        case "HTML_ADDED_TO_LAYOUT":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type: "html", 
                            html: action.payload.html,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "right")
                    {
                        item.right.push({
                            type: "html", 
                            html: action.payload.html,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "center")
                    {
                        item.center.push({
                            type: "html", 
                            html: action.payload.html,
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

        case "BUTTON_ADDED_TO_LAYOUT":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type: "btn", 
                            data: btnData,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "right")
                    {
                        item.right.push({
                            type: "btn", 
                            data: btnData,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "center")
                    {
                        item.center.push({
                            type: "btn", 
                            data: btnData,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                }
            });

            return state;

        case "EDIT_BTN_DATA":

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

        case 'DnD_ITEMS':
            
            const {
                drag_id,
                drop_id,
                drag_layout_id,
                drag_position,
                drop_layout_id,
                drop_position,
                movement
            } = action.payload;

            if(drag_layout_id === drop_layout_id && drag_position === drop_position)
            {
                state.forEach( item => {
                    if(item.id === drag_layout_id)
                    {
                        if(drag_position === 'left')
                        {
                            const DragIndex = item.left.findIndex( (item) => {
                                return item.id === drag_id
                            });
    
                            const DropIndex = item.left.findIndex( (item) => {
                                return item.id === drop_id
                            });
    
                            const removedItem = item.left.splice(DragIndex,1)[0];
    
                            if(movement === "up")
                            {
                                item.left.splice(DropIndex,0,removedItem);
                            }
                            else
                            {
                                item.left.splice(DropIndex+1,0,removedItem);
                            }
    
                        }
                        else if(drag_position === 'right')
                        {
                            const DragIndex = item.right.findIndex( (item) => {
                                return item.id === drag_id
                            });
    
                            const DropIndex = item.right.findIndex( (item) => {
                                return item.id === drop_id
                            });
    
                            const removedItem = item.right.splice(DragIndex,1)[0];
    
                            if(movement === "up")
                            {
                                item.right.splice(DropIndex,0,removedItem);
                            }
                            else
                            {
                                item.right.splice(DropIndex+1,0,removedItem);
                            }
                        }
                        else if(drag_position === 'center')
                        {
                            const DragIndex = item.center.findIndex( (item) => {
                                return item.id === drag_id
                            });
    
                            const DropIndex = item.center.findIndex( (item) => {
                                return item.id === drop_id
                            });
    
                            const removedItem = item.center.splice(DragIndex,1)[0];
    
                            if(movement === "up")
                            {
                                item.center.splice(DropIndex,0,removedItem);
                            }
                            else
                            {
                                item.center.splice(DropIndex+1,0,removedItem);
                            }
                        }
                    }
                });
    
                return state;
            }
            else
            {
                state.forEach( item => {
                    if(item.id === drag_layout_id)
                    {
                        if(drag_position === 'left')
                        {
                            const DragIndex = item.left.findIndex( (item) => {
                                return item.id === drag_id
                            });

                            const removedItem = item.left.splice(DragIndex,1)[0];

                            const newItem = {
                                ...removedItem,
                                layout_id: drop_layout_id,
                                position: drop_position
                            }

                            state.forEach( item => {
                                if(item.id === drop_layout_id)
                                {
                                    if(drop_position === 'left')
                                    {
                                        const DropIndex = item.left.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.left.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.left.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                    else if(drop_position === 'right')
                                    {
                                        const DropIndex = item.right.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.right.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.right.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                    else if(drop_position === 'center')
                                    {
                                        const DropIndex = item.center.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.center.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.center.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                }
                            });
                        }
                        else if(drag_position === 'right')
                        {
                            const DragIndex = item.right.findIndex( (item) => {
                                return item.id === drag_id
                            });

                            const removedItem = item.right.splice(DragIndex,1)[0];

                            const newItem = {
                                ...removedItem,
                                layout_id: drop_layout_id,
                                position: drop_position
                            }

                            state.forEach( item => {
                                if(item.id === drop_layout_id)
                                {
                                    if(drop_position === 'left')
                                    {
                                        const DropIndex = item.left.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.left.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.left.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                    else if(drop_position === 'right')
                                    {
                                        const DropIndex = item.right.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.right.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.right.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                    else if(drop_position === 'center')
                                    {
                                        const DropIndex = item.center.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.center.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.center.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                }
                            });
                        }
                        else if(drag_position === 'center')
                        {
                            const DragIndex = item.center.findIndex( (item) => {
                                return item.id === drag_id
                            });

                            const removedItem = item.center.splice(DragIndex,1)[0];

                            const newItem = {
                                ...removedItem,
                                layout_id: drop_layout_id,
                                position: drop_position
                            }

                            state.forEach( item => {
                                if(item.id === drop_layout_id)
                                {
                                    if(drop_position === 'left')
                                    {
                                        const DropIndex = item.left.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.left.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.left.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                    else if(drop_position === 'right')
                                    {
                                        const DropIndex = item.right.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.right.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.right.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                    else if(drop_position === 'center')
                                    {
                                        const DropIndex = item.center.findIndex( (item) => {
                                            return item.id === drop_id
                                        });

                                        if(movement === "up")
                                        {
                                            item.center.splice(DropIndex,0,newItem);
                                        }
                                        else
                                        {
                                            item.center.splice(DropIndex+1,0,newItem);
                                        }
                                    }
                                }
                            });
                        }
                    }
                });
    
                return state;
            }
            
        case "EDIT_HTML_DATA":
            
            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        item.left.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.html = action.payload.html; 
                            }
                        });
                    }
                    else if(action.payload.position === 'right')
                    {
                        item.right.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.html = action.payload.html; 
                            }
                        });
                    }
                    else if(action.payload.position === 'center')
                    {
                        item.center.forEach( component => {
                            if(component.id === action.payload.id)
                            {
                                component.html = action.payload.html; 
                            }
                        });
                    }
                }
            });

            return state;

        case "ICONS_ADDED_TO_LAYOUT":

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === "left")
                    {
                        item.left.push({
                            type: "social_media", 
                            data: socialMediaIconsData,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "right")
                    {
                        item.right.push({
                            type: "social_media", 
                            data: socialMediaIconsData,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                    else if(action.payload.position === "center")
                    {
                        item.center.push({
                            type: "social_media", 
                            data: socialMediaIconsData,
                            id: action.payload.id,
                            layout_id: action.payload.layout_id,
                            position: action.payload.position 
                        });
                    }
                }
            });

            return state;

        case "EDIT_ICONS_DATA":
            
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

        case "DUPLICATE_ITEM": 

            state.forEach( item => {
                if(item.id === action.payload.layout_id)
                {
                    if(action.payload.position === 'left')
                    {
                        const item_to_be_duplicated = item.left.find( component => {
                            return component.id === action.payload.id
                        });

                        const new_item = {
                            ...item_to_be_duplicated,
                            id: action.payload.new_item_id
                        }

                        const index_of_item_to_be_duplicated = item.left.findIndex( component => {
                            return component.id === action.payload.id
                        });

                        item.left.splice(index_of_item_to_be_duplicated+1, 0, new_item);
                    }
                    else if(action.payload.position === 'right')
                    {
                        const item_to_be_duplicated = item.right.find( component => {
                            return component.id === action.payload.id
                        });

                        const new_item = {
                            ...item_to_be_duplicated,
                            id: action.payload.new_item_id
                        }

                        const index_of_item_to_be_duplicated = item.right.findIndex( component => {
                            return component.id === action.payload.id
                        });

                        item.right.splice(index_of_item_to_be_duplicated+1, 0, new_item);
                    }
                    else if(action.payload.position === "center")
                    {
                        const item_to_be_duplicated = item.center.find( component => {
                            return component.id === action.payload.id
                        });

                        const new_item = {
                            ...item_to_be_duplicated,
                            id: action.payload.new_item_id
                        }

                        const index_of_item_to_be_duplicated = item.center.findIndex( component => {
                            return component.id === action.payload.id
                        });

                        item.center.splice(index_of_item_to_be_duplicated+1, 0, new_item);
                    }
                }
            });

            return state;

        case "DUPLICATE_LAYOUT": 

            const layout_to_be_dublicated = state.find( layout => {
                return layout.id === action.payload.id
            });

            let new_layout = {}

            if(layout_to_be_dublicated.layout_type === 0)
            {
                new_layout = {
                    ...layout_to_be_dublicated,
                    id: action.payload.new_layout_id,
                    center: layout_to_be_dublicated.center.map( item => {
                        return {
                            ...item,
                            layout_id: action.payload.new_layout_id
                        }
                    })
                }
            }
            else if(
                layout_to_be_dublicated.layout_type === 1 || 
                layout_to_be_dublicated.layout_type === 3 || 
                layout_to_be_dublicated.layout_type === 4
            )
            {
                new_layout = {
                    ...layout_to_be_dublicated,
                    id: action.payload.new_layout_id,
                    left: layout_to_be_dublicated.left.map( item => {
                        return {
                            ...item,
                            layout_id: action.payload.new_layout_id
                        }
                    }),
                    right: layout_to_be_dublicated.right.map( item => {
                        return {
                            ...item,
                            layout_id: action.payload.new_layout_id
                        }
                    })
                }
            }
            else if(layout_to_be_dublicated.layout_type === 2)
            {
                new_layout = {
                    ...layout_to_be_dublicated,
                    id: action.payload.new_layout_id,
                    left: layout_to_be_dublicated.left.map( item => {
                        return {
                            ...item,
                            layout_id: action.payload.new_layout_id
                        }
                    }),
                    right: layout_to_be_dublicated.right.map( item => {
                        return {
                            ...item,
                            layout_id: action.payload.new_layout_id
                        }
                    }),
                    center: layout_to_be_dublicated.center.map( item => {
                        return {
                            ...item,
                            layout_id: action.payload.new_layout_id
                        }
                    })
                }
            }

            const index_of_layout_to_be_duplicated = state.findIndex( layout => {
                return layout.id === action.payload.id
            });

            state.splice(index_of_layout_to_be_duplicated+1, 0, new_layout);

            return state;

        case "ASSIGN_TEMPLATE":

            return action.payload.data;

        default:
            return state;
    }
}
