// A component when drap and dropped adds a sub-heading to a layout

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addItemToLayout } from '../../actions';

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
            // On drop call a action to add sub-heading to layout
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addItemToLayout(
                    "Sub-Heading",
                    monitor.getDropResult().layout_id,
                    monitor.getDropResult().location,
                    "h3"
                );
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

class SubHeading extends Component 
{
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/sub-heading-icon.png" className="img-fluid mx-auto d-block" alt="" width="90%"/>
                <p className="mb-0">Sub-Heading</p>
            </div>
        );
    }
}

export default connect(null, { 
    addItemToLayout
 })(DragSource('item', spec, collect)(SubHeading));
