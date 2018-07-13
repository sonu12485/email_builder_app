// A component when drap and dropped adds a button to a layout

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addButtonToLayout } from '../../actions';

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
            // On drop call a action to add button to layouts
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addButtonToLayout(
                    monitor.getDropResult().layout_id,
                    monitor.getDropResult().location
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

class Button extends Component 
{
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/button-icon.png" alt="" className="img-fluid mx-auto d-block" width="90%"/>
                <p className="mb-0">Button</p>
            </div>
        );
    }
}

export default connect(null, { 
    addButtonToLayout 
})(DragSource('item', spec, collect)(Button));
