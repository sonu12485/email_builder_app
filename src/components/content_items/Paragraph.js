// A component when drap and dropped adds a paragraph to a layout

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
            const data = `Ullamco dolore commodo ad do ea
            mollit fugiat aliquip sit Lorem. Do fugiat in laborum enim 
            duis veniam reprehenderit. Nulla velit quis excepteur proiden
            t exercitation.`;
            // On drop call a action to add paragraph to layout
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addItemToLayout(
                    data,
                    monitor.getDropResult().layout_id,
                    monitor.getDropResult().location,
                    "p"
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

class Paragraph extends Component {
    render() {
        const { connectDragSource, connectDragPreview, isDragging } = this.props;

        return connectDragSource(
            <div className="box" >
                <img src="img/content-icon/paragraph-icon.png" alt="" className="img-fluid mx-auto d-block" width="90%"/>
                <p className="mb-0">Paragraph</p>
            </div>
        );
    }
}

export default connect(null, { 
    addItemToLayout
 })(DragSource('item', spec, collect)(Paragraph));
