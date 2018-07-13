// A component when drap and dropped adds a double column layout with larger right column

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addLayout } from '../../actions/index';

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
            //console.log(monitor.getDropResult());

            // on drop call a action to add given layout 
            if(!monitor.getDropResult().layout_id)
            {
                props.addLayout(4);
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


class Layout_1_2_right extends Component 
{
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="layout_items" >
                <div className="layout_inside_blocks_2_small" ></div>
                <div className="layout_inside_blocks_2_large" ></div>
            </div>
        );
    }
}

export default connect(null, { 
    addLayout 
})(DragSource('layout', spec, collect)(Layout_1_2_right));