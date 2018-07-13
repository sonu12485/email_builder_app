// A component when drap and dropped adds a social-media-icons component to a layout

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addIconsToLayout } from '../../actions/index';

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
            // On drop call a action to add social-media-icons component to layout
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addIconsToLayout(
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

class SocialMediaIcons extends Component 
{
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/social-media-icon.png" alt="" className="img-fluid mx-auto d-block" width="90%"/>
                <p className="mb-0">Social Media Icons</p>
            </div>
        );
    }
}

export default connect(null, {
    addIconsToLayout
})(DragSource('item', spec, collect)(SocialMediaIcons));
