import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addhr, addHrToLayout } from '../actions';

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
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addHrToLayout(
                    monitor.getDropResult().layout_id,
                    monitor.getDropResult().location
                );
            }
            else
            {
                props.addhr();
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

class HorizontalRule extends Component {
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <h4>Horizontal Rule</h4>
            </div>
        );
    }
}

export default connect(null, { 
    addhr, addHrToLayout 
})(DragSource('item', spec, collect)(HorizontalRule));
