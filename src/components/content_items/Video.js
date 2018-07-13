// A component when drap and dropped adds a video to a layout

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addVideoToLayout } from '../../actions';

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
            // On drop call a action to add video to layout
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addVideoToLayout(
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

class Video extends Component 
{
    render() 
    {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/video-icon.png" alt="" 
                    className="img-fluid mx-auto d-block" 
                    width="70%"
                />
                <p className="mb-0">Video</p>
            </div>
        );
    }
}

export default connect(null, {
    addVideoToLayout
})(DragSource('item', spec, collect)(Video));
