import React, { Component } from 'react';

import { Button } from 'reactstrap';

import { findDOMNode } from 'react-dom';

import {
	DragSource,
	DropTarget,
	ConnectDropTarget,
	ConnectDragSource,
	DropTargetMonitor,
	DropTargetConnector,
	DragSourceConnector,
	DragSourceMonitor,
} from 'react-dnd';

import { XYCoord } from 'dnd-core';

import flow from 'lodash/flow';

const cardSource = {
	beginDrag(props) {
		return {
			id: props.item.id
		}
	},
}

const cardTarget = {
    /*hover(props, monitor, component) 
    {
		if (!component) {
			return null
		}
		const dragIndex = monitor.getItem().id;
		const hoverIndex = props.item.id;

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = (findDOMNode(
			component,
		)).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = (clientOffset).y - hoverBoundingRect.top

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%
		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
		}

		// Time to actually perform the action
        
        // *** props.moveCard(dragIndex, hoverIndex)

        console.log(dragIndex, hoverIndex);

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().index = hoverIndex
    },*/
    drop(props, monitor, component)
    {
        if (!component) {
			return null
		}
		const dragIndex = monitor.getItem().id;
		const hoverIndex = props.item.id;

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = (findDOMNode(
			component,
		)).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = (clientOffset).y - hoverBoundingRect.top

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        
		// Dragging downwards
		if (hoverClientY < hoverMiddleY) {
            console.log("up");
            console.log("drop" ,dragIndex, hoverIndex);
            props.dnd_items(dragIndex, hoverIndex, props.layout_id, props.location,"up");            
		}

		// Dragging upwards
		if (hoverClientY > hoverMiddleY) {
            console.log("down");
            console.log("drop" ,dragIndex, hoverIndex);
            props.dnd_items(dragIndex, hoverIndex, props.layout_id, props.location,"down");            
		}

		monitor.getItem().index = hoverIndex
    } 
}

class LayoutCellItem extends Component {

    renderItem = () =>
    {
        if(this.props.type === 'h1')
        {
            return (
                <h1 style={this.props.style} 
                    className="item_h1"
                    key={this.props.item.id} 
                    onClick={ () => {
                        this.props.edit_h1(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location);
                    }}
                >
                    {this.props.item.data}
                </h1>
            );
        }
        else if(this.props.type === 'h3')
        {
            return (
                <h3 style={this.props.style} 
                    className="item_h3"
                    key={this.props.item.id} 
                    onClick={ () => {
                        this.props.edit_h3(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location);
                    }}
                >
                    {this.props.item.data}
                </h3>
            );
        }
        else if(this.props.type === 'hr')
        {
            return (
                <div key={this.props.item.id} 
                    className="item_hr"
                    onClick={ () => {
                        this.props.edit_hr(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location)
                    }}
                >
                <hr />
                </div>
            );
        }
        else if(this.props.type === 'p')
        {
            return (
                <div key={this.props.item.id} 
                    style={this.props.style} 
                    className="item_p"
                    onClick={ () => {
                        this.props.edit_p(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location)
                    }}
                >
                    <p>{this.props.item.data}</p>
                </div>
            );
        }
        else if(this.props.type === 'img')
        {
            return (
                <div key={this.props.item.id} 
                    style={styles.item_img_container}
                    className="item_img"
                    onClick={ () => {
                        this.props.edit_img(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location)
                    }}
                >
                    <img src={this.props.item.src} style={styles.item_img} />
                </div>
            );
        }
        else if(this.props.type === 'btn')
        {
            return (
                <div key={this.props.item.id}
                    className="item_btn"
                    style={{
                        textAlign: this.props.item.data.alignment,
                        ...this.props.item.data.style
                    }}
                    onClick={ () => {
                        this.props.edit_btn(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location)
                    } }
                >
                    <Button
                        color={this.props.item.data.color}
                        href={this.props.item.data.url}
                        size={this.props.item.data.size}
                        block={this.props.item.data.block}
                        target={this.props.item.data.target}
                    >{this.props.item.data.name}</Button>
                </div>
            );
        }
    }

    render() {

        const {
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props;
		const opacity = isDragging ? 0 : 1;

        return (
			connectDragSource &&
			connectDropTarget &&
			connectDragSource(
				connectDropTarget(
                    <div style = {{ opacity }} >
                        {this.renderItem()}
                    </div>
                ),
			)
		)
    }
}

const styles = {
    
    item_img_container: {
        display: "flex",
        justifyContent: "center",
        marginTop:10,
        marginBottom:10,
        width: "100%",
    },

    item_img: {
        width: "100%",
        objectFit: "contain"
    }
}

export default flow(
    DragSource(
        'move',
        cardSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ),
    DropTarget('move', cardTarget, (connect) => ({
        connectDropTarget: connect.dropTarget(),
    }))
  )(LayoutCellItem);