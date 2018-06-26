import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addImage } from '../actions';

const spec = {
    beginDrag(props) 
    {
        console.log("BD");
        return {};
    },
    endDrag(props, monitor, component) 
    {
        if(monitor.didDrop())
        {
            console.log("ED");
            //call a action 
            if(monitor.getDropResult().layout_id)
            {

            }
            else
            {
                props.addImage("http://via.placeholder.com/500x250");
            }
        }
        else
        {
            return;
        }
    }
}

function collect(connect, monitor)
{
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Image extends Component {
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <h4>Image</h4>
            </div>
        );
    }
}

export default connect(null, { addImage })(DragSource('item', spec, collect)(Image));
