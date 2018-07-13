// A component when drap and dropped adds a HR to a layout

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addHrToLayout } from '../../actions';

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
            // On drop call a action to add HR to layouts
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addHrToLayout(
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

class HorizontalRule extends Component {
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/horizontal-ruler-icon.png" alt="" className="img-fluid mx-auto d-block" width="90%"/>
                <p className="mb-0">Horizontal Ruler</p>
            </div>
        );
    }
}

export default connect(null, { 
    addHrToLayout 
})(DragSource('item', spec, collect)(HorizontalRule));
