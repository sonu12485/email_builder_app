import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DragSource } from 'react-dnd';

import { addItemToLayout } from '../actions';

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
            t exercitation. Consectetur dolore minim ipsum et esse officia 
            sit non do ullamco Lorem minim nostrud culpa
            Excepteur tempor enim nostrud exercitation mollit nulla voluptate
            incididunt eiusmod. Labore commodo adipisicing sunt aute nulla 
            officia velit ad proident nisi. Elit eiusmod cillum quis aliquip.
            Laborum voluptate reprehenderit quis dolore occaecat proident labore 
            consequat voluptate. Culpa nulla sit nisi adipisicing nostrud ipsum. 
            Anim irure cupidatat id proident ut ex aute est nisi.`;
            //call a action 
            if(monitor.getDropResult().layout_id && monitor.getDropResult().location)
            {
                props.addItemToLayout(
                    data,
                    monitor.getDropResult().layout_id,
                    monitor.getDropResult().location,
                    "p"
                );
            }
            /*else
            {
                props.addParagraph(data);
            }*/
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
                <h4>Paragraph</h4>
            </div>
        );
    }
}

export default connect(null, { 
    addItemToLayout
 })(DragSource('item', spec, collect)(Paragraph));
