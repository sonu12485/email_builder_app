// A component when drap and dropped adds a heading to a layout

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
            // On drop call a action to add heading to layout
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addItemToLayout(
                    "Heading",
                    monitor.getDropResult().layout_id,
                    monitor.getDropResult().location,
                    "h1"
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

class Heading extends Component {
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/heading-icon.png" alt="" className="img-fluid mx-auto d-block" width="90%"/>
                <p className="mb-0">Heading</p>
            </div>
        );
    }
}

export default connect(null, { 
    addItemToLayout 
})(DragSource('item', spec, collect)(Heading));
