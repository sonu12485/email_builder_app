// this renders each single component passed to it from LayoutCell
// and also adds drag and drop feature to it

import React, { Component } from 'react';

import { Button } from 'reactstrap';

import * as FA from 'react-icons/lib/fa';

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
            id: props.item.id,
            layout_id: props.layout_id,
            position: props.location
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
        const dragItem = monitor.getItem();
        const hoverItem = props.item;
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
            //console.log("up");
            //console.log("drop");
            //console.log(dragItem,hoverItem);

            // on drop call action to DnD components
            props.dnd_items(dragIndex, 
                hoverIndex,
                dragItem.layout_id,
                dragItem.position,
                hoverItem.layout_id,
                hoverItem.position,
                "up");            
		}

		// Dragging upwards
		if (hoverClientY > hoverMiddleY) {
            //console.log("down");
            //console.log("drop");
            //console.log(dragItem,hoverItem);

            // on drop call action to DnD components
            props.dnd_items(dragIndex, 
                hoverIndex, 
                dragItem.layout_id,
                dragItem.position,
                hoverItem.layout_id,
                hoverItem.position,
                "down");            
		}

		monitor.getItem().index = hoverIndex
    } 
}

class LayoutCellItem extends Component {

    // renders each component as passed to it
    renderItem = () =>
    {
        if(this.props.type === 'h1')
        {
            return (
                <div style={this.props.style} 
                    className="item_h1"
                    key={this.props.item.id} 
                    onClick={ () => {
                        this.props.edit_h1(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location);
                    }}
                >
                    {this.props.item.data}
                </div>
            );
        }
        else if(this.props.type === 'h3')
        {
            return (
                <div style={this.props.style} 
                    className="item_h3"
                    key={this.props.item.id} 
                    onClick={ () => {
                        this.props.edit_h3(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location);
                    }}
                >
                    {this.props.item.data}
                </div>
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
                    {this.props.item.data}
                </div>
            );
    }
        else if(this.props.type === 'img')
        {
            const item_img_container_styles = {
                marginTop:10,
                marginBottom:10,
                width: "100%",
                overflow: "hidden",
                ...this.props.item.styles
            };

            let item_img_styles = {};

            if(this.props.item.styles.fullWidth)
            {
                item_img_styles = {
                    width: "100%",
                    height: "auto",
                    transform: `rotate(${this.props.item.rotate}deg)`,
                }
            }
            else
            {
                item_img_styles = {
                    maxWidth: "100%",
                    height: "auto",
                    transform: `rotate(${this.props.item.rotate}deg)`,
                }
            }

            if(this.props.item.link !== '')
            {
                return (
                    <div key={this.props.item.id} 
                        style={item_img_container_styles}
                        className="item_img"
                        onClick={ () => {
                            this.props.edit_img(this.props.item.id, 
                                this.props.layout_id, 
                                this.props.location)
                        }}
                    >
                        <a target="_blank" href={this.props.item.link} >
                            <img src={this.props.item.src} style={item_img_styles} />
                        </a>
                    </div>
                );
            }
            else
            {
                return (
                    <div key={this.props.item.id} 
                        style={ item_img_container_styles }
                        className="item_img"
                        onClick={ () => {
                            this.props.edit_img(this.props.item.id, 
                                this.props.layout_id, 
                                this.props.location)
                        }}
                    >
                        <img src={this.props.item.src} style={item_img_styles} />
                    </div>
                );
            }
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
        else if(this.props.type === 'html')
        {
            return (
                <div
                    key={this.props.item.id}
                    className="item_html"
                    onClick={ () => {
                        this.props.edit_HTML(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location)
                    } }
                    dangerouslySetInnerHTML={{ __html: this.props.item.html }}
                >
                </div>
            );
        }
        else if(this.props.type === 'social_media_icons')
        {
            let size;

            if(this.props.item.data.size === "default")
            {
                size = 35;
            }
            else if(this.props.item.data.size === "large")
            {
                size = 50;
            }
            else if(this.props.item.data.size === "small")
            {
                size = 25;
            }

            if(this.props.item.data.layout === "row")
            {
                if(this.props.item.data.color === "default")
                {
                    return (
                        <div className="item_social_media" 
                        onClick={ () => {
                            this.props.edit_icons(this.props.item.id, 
                                this.props.layout_id, 
                                this.props.location)
                        } }
                        >
                        <div
                            key={this.props.item.id}
                            style={{textAlign: this.props.item.data.alignment}}
                        >
                            {this.props.item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.facebook} key={icon} >
                                            <FA.FaFacebookOfficial size={size} 
                                            color={
                                                this.props.item.data.colors.facebook
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "twitter")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.twitter} key={icon} >
                                            <FA.FaTwitter size={size} 
                                            color={
                                                this.props.item.data.colors.twitter
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "linkedin")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.linkedin} key={icon} >
                                            <FA.FaLinkedinSquare size={size} 
                                            color={
                                                this.props.item.data.colors.linkedin
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "youtube")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.youtube} key={icon} >
                                            <FA.FaYoutubeSquare size={size} 
                                            color={
                                                this.props.item.data.colors.youtube
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "google")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.google} key={icon} >
                                            <FA.FaGooglePlus size={size} 
                                            color={
                                                this.props.item.data.colors.google
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "github")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.github} key={icon} >
                                            <FA.FaGithub size={size} 
                                            color={
                                                this.props.item.data.colors.github
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "instagram")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.instagram} key={icon} >
                                            <FA.FaInstagram size={size} 
                                            color={
                                                this.props.item.data.colors.instagram
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                })}
                        </div>
                        </div>
                    )
                }
                else
                {
                    return (
                        <div className="item_social_media" 
                        onClick={ () => {
                            this.props.edit_icons(this.props.item.id, 
                                this.props.layout_id, 
                                this.props.location)
                        } }
                        >
                        <div
                            key={this.props.item.id}
                            style={{textAlign: this.props.item.data.alignment}}
                        >
                            {this.props.item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.facebook} key={icon} >
                                            <FA.FaFacebookOfficial size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "twitter")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.twitter} key={icon} >
                                            <FA.FaTwitter size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "linkedin")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.linkedin} key={icon} >
                                            <FA.FaLinkedinSquare size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "youtube")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.youtube} key={icon} >
                                            <FA.FaYoutubeSquare size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "google")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.google} key={icon} >
                                            <FA.FaGooglePlus size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "github")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.github} key={icon} >
                                            <FA.FaGithub size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "instagram")
                                    {
                                        return (
                                            <a target="_blank" href={this.props.item.data.link.instagram} key={icon} >
                                            <FA.FaInstagram size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                })}
                        </div>
                        </div>
                    )
                }
            }
            else 
            {
                if(this.props.item.data.color === "default")
                {
                    return (
                        <div className="item_social_media" 
                        onClick={ () => {
                            this.props.edit_icons(this.props.item.id, 
                                this.props.layout_id, 
                                this.props.location)
                        } }
                        >
                        <div
                            key={this.props.item.id}
                            style={{textAlign: this.props.item.data.alignment}}
                        >
                            {this.props.item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.facebook} >
                                            <FA.FaFacebookOfficial size={size} 
                                            color={
                                                this.props.item.data.colors.facebook
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        );
                                    }
                                    else if(icon === "twitter")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.twitter} >
                                            <FA.FaTwitter size={size} 
                                            color={
                                                this.props.item.data.colors.twitter
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        );
                                    }
                                    else if(icon === "linkedin")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.linkedin} >
                                            <FA.FaLinkedinSquare size={size} 
                                            color={
                                                this.props.item.data.colors.linkedin
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        );
                                    }
                                    else if(icon === "youtube")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.youtube} >
                                            <FA.FaYoutubeSquare size={size} 
                                            color={
                                                this.props.item.data.colors.youtube
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                    else if(icon === "google")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.google} >
                                            <FA.FaGooglePlus size={size} 
                                            color={
                                                this.props.item.data.colors.google
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                    else if(icon === "github")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.github} >
                                            <FA.FaGithub size={size} 
                                            color={
                                                this.props.item.data.colors.github
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                    else if(icon === "instagram")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.instagram} >
                                            <FA.FaInstagram size={size} 
                                            color={
                                                this.props.item.data.colors.instagram
                                            } 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                })}
                        </div>
                        </div>
                    )
                }
                else
                {
                    return (
                        <div className="item_social_media" 
                        onClick={ () => {
                            this.props.edit_icons(this.props.item.id, 
                                this.props.layout_id, 
                                this.props.location)
                        } }
                        >
                        <div
                            key={this.props.item.id}
                            style={{textAlign: this.props.item.data.alignment}}
                        >
                            {this.props.item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.facebook} >
                                            <FA.FaFacebookOfficial size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        );
                                    }
                                    else if(icon === "twitter")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.twitter} >
                                            <FA.FaTwitter size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        );
                                    }
                                    else if(icon === "linkedin")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.linkedin} >
                                            <FA.FaLinkedinSquare size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        );
                                    }
                                    else if(icon === "youtube")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.youtube} >
                                            <FA.FaYoutubeSquare size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                    else if(icon === "google")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.google} >
                                            <FA.FaGooglePlus size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                    else if(icon === "github")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.github} >
                                            <FA.FaGithub size={size} 
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                    else if(icon === "instagram")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={this.props.item.data.link.instagram} >
                                            <FA.FaInstagram size={size}
                                            color={this.props.item.data.colorValue} 
                                            style={{margin: 5}}
                                            /><br />
                                            </a>
                                            </div>
                                        )
                                    }
                                })}
                        </div>
                        </div>
                    )
                }
            }
        }
        else if(this.props.type === 'video')
        {
            return (
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%", // for 16:9 aspect ratio
                        overflow: "hidden"
                    }}
                >
                <iframe
                    key={this.props.item.id} 
                    style = {{
                        position: "absolute",
                        top: 0, bottom: 0, left: 0, right: 0,
                        padding: 10
                    }}
                    width = "100%"
                    height = "100%"
                    className="item_video"
                    src={this.props.item.data.url} 
                    frameborder="0" 
                    onClick={ () => {
                        this.props.edit_video(this.props.item.id, 
                            this.props.layout_id, 
                            this.props.location)
                    }}
                >
                </iframe>
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
