// this renders the components in a particular layout column and 
// also computes it's equivalent HTML and stores it

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DropTarget } from 'react-dnd';

import { update as update_action } from '../actions/index';

import ReactDOMServer from 'react-dom/server';

import { Button } from 'reactstrap';

import * as FA from 'react-icons/lib/fa';

import LayoutCellItem from './LayoutCellItem';

function collect(connect, monitor)
{
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

const spec = {
    drop(props, monitor, component)
    {
        return {
            location: props.location,
            layout_id: props.layout_id
        }
    }
};

class LayoutCell extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            items: props.items
        }
    }

    // this renders all components present inside a particular layout column
    renderItems = () =>
    {
        return this.props.items.map( item => {
            if(item.type === 'h1')
            {
                let style = {};

                // sets styles for each component
                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="h1"
                        style={style}
                        item={item}
                    />
                );
            }
            else if(item.type === 'h3')
            {
                let style = {};

                // sets styles for each component
                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="h3"
                        style={style}
                        item={item}
                    />
                );
            }
            else if(item.type === 'hr')
            {
                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="hr"
                        item={item}
                    />
                );
            }
            else if(item.type === 'p')
            {
                let style = {};

                // sets styles for each component
                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="p"
                        style={style}
                        item={item}
                    />
                );
            }
            else if(item.type === 'img')
            {
                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="img"
                        item={item}
                    />
                );
            }
            else if(item.type === 'btn')
            {
                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="btn"
                        item={item}
                    />
                );
            }
            else if(item.type === 'html')
            {
                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id}
                        { ...this.props }
                        type="html"
                        item={item}
                    />
                );
            }
            else if(item.type === 'social_media')
            {
                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id}
                        { ...this.props }
                        type="social_media_icons"
                        item={item}
                    />
                )
            }
            else if(item.type === "video")
            {
                // the LayoutCellItem then renders each single component in side a layout column/LayoutCell
                return (
                    <LayoutCellItem 
                        key={item.id}
                        { ...this.props }
                        type="video"
                        item={item}
                    />
                );
            }
        });
    }

    // this computes the equivalent HTML of all components inside a layout column and saves it
    renderItemsHTML = () =>
    {
        return this.props.items.map( item => {
            if(item.type === 'h1')
            {
                let style = {};

                // sets styles for each component
                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                return (
                    <div style={style} 
                        className="item_h1"
                        key={item.id} 
                    >
                        {item.data}
                    </div>
                );
            }
            else if(item.type === 'h3')
            {
                let style = {};

                // sets styles for each component
                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                return (
                    <div style={style} 
                        key={item.id} 
                        className="item_h3"
                    >
                        {item.data}
                    </div>
                );
            }
            else if(item.type === 'hr')
            {
                return (
                    <div key={item.id} 
                        className="item_hr"
                    >
                    <hr />
                    </div>
                );
            }
            else if(item.type === 'p')
            {
                let style = {};

                // sets styles for each component
                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                return (
                    <div key={item.id} 
                        style={style} 
                        className="item_p"
                    >
                        {item.data}
                    </div>
                );
            }
            else if(item.type === 'img')
            {
                // sets styles for each component
                const item_img_container_styles = {
                    marginTop:10,
                    marginBottom:10,
                    width: "100%",
                    overflow: "hidden",
                    ...item.styles
                };

                let item_img_styles = {};

                if(item.styles.fullWidth)
                {
                    item_img_styles = {
                        width: "100%",
                        height: "auto",
                        transform: `rotate(${item.rotate}deg)`,
                    }
                }
                else
                {
                    item_img_styles = {
                        maxWidth: "100%",
                        height: "auto",
                        transform: `rotate(${item.rotate}deg)`,
                    }
                }

                if(item.link === '')
                {
                    return (
                        <div key={item.id} 
                            style={item_img_container_styles}
                            className="item_img"
                        >
                            <img src={item.src} style={item_img_styles} />
                        </div>
                    );
                }
                else
                {
                    return (
                        <div key={item.id} 
                            style={item_img_container_styles}
                            className="item_img"
                        >
                        <a target="_blank" href={item.link} >
                            <img src={item.src} style={item_img_styles} />
                        </a>
                        </div>
                    );
                }
            }
            else if(item.type === 'btn')
            {
                return (
                    <div key={item.id}
                        className="item_btn"
                        // sets styles for each component
                        style={{
                            textAlign: item.data.alignment,
                            ...item.data.style
                        }}
                    >
                        <Button
                            color={item.data.color}
                            href={item.data.url}
                            size={item.data.size}
                            block={item.data.block}
                            target={item.data.target}
                        >{item.data.name}</Button>
                    </div>
                );
            }
            else if(item.type === 'html')
            {
                return (
                    <div
                        key={item.id}
                        className="item_html"
                        dangerouslySetInnerHTML={{ __html: item.html }}
                    >
                    </div>
                );
            }
            else if(item.type === 'social_media')
            {
                let size;

                if(item.data.size === "default")
                {
                    size = 35;
                }
                else if(item.data.size === "large")
                {
                    size = 50;
                }
                else if(item.data.size === "small")
                {
                    size = 25;
                }

                if(item.data.layout === "row")
                {
                    if(item.data.color === "default")
                    {
                        return (
                            <div className="item_social_media" >
                            <div
                                key={item.id}
                                style={{textAlign: item.data.alignment}}
                            >
                                {item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.facebook} key={icon} >
                                            <FA.FaFacebookOfficial size={size} 
                                            color={
                                                item.data.colors.facebook
                                            } 
                                            style={{margin: 5}}                                         
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "twitter")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.twitter} key={icon} >
                                            <FA.FaTwitter size={size} 
                                            color={
                                                item.data.colors.twitter
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "linkedin")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.linkedin} key={icon} >
                                            <FA.FaLinkedinSquare size={size} 
                                            color={
                                                item.data.colors.linkedin
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "youtube")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.youtube} key={icon} >
                                            <FA.FaYoutubeSquare size={size} 
                                            color={
                                                item.data.colors.youtube
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "google")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.google} key={icon} >
                                            <FA.FaGooglePlus size={size} 
                                            color={
                                                item.data.colors.google
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "github")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.github} key={icon} >
                                            <FA.FaGithub size={size} 
                                            color={
                                                item.data.colors.github
                                            } 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "instagram")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.instagram} key={icon} >
                                            <FA.FaInstagram size={size} 
                                            color={
                                                item.data.colors.instagram
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
                            <div className="item_social_media" >
                            <div
                                key={item.id}
                                style={{textAlign: item.data.alignment}}
                            >
                                {item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.facebook} key={icon} >
                                            <FA.FaFacebookOfficial size={size} 
                                            color={item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "twitter")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.twitter} key={icon} >
                                            <FA.FaTwitter size={size} 
                                            color={item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "linkedin")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.linkedin} key={icon} >
                                            <FA.FaLinkedinSquare size={size} 
                                            color={item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        );
                                    }
                                    else if(icon === "youtube")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.youtube} key={icon} >
                                            <FA.FaYoutubeSquare size={size} 
                                            color={item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "google")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.google} key={icon} >
                                            <FA.FaGooglePlus size={size} 
                                            color={item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "github")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.github} key={icon} >
                                            <FA.FaGithub size={size} 
                                            color={item.data.colorValue} 
                                            style={{margin: 5}}
                                            />
                                            </a>
                                        )
                                    }
                                    else if(icon === "instagram")
                                    {
                                        return (
                                            <a target="_blank" href={item.data.link.instagram} key={icon} >
                                            <FA.FaInstagram size={size} 
                                            color={item.data.colorValue} 
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
                    if(item.data.color === "default")
                    {
                        return (
                            <div className="item_social_media" >
                            <div
                                key={item.id}
                                style={{textAlign: item.data.alignment}}
                            >
                                {item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={item.data.link.facebook}>
                                            <FA.FaFacebookOfficial size={size} 
                                            color={
                                                item.data.colors.facebook
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
                                            <a target="_blank" href={item.data.link.twitter}>
                                            <FA.FaTwitter size={size} 
                                            color={
                                                item.data.colors.twitter
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
                                            <a target="_blank" href={item.data.link.linkedin}>
                                            <FA.FaLinkedinSquare size={size} 
                                            color={
                                                item.data.colors.linkedin
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
                                            <a target="_blank" href={item.data.link.youtube}>
                                            <FA.FaYoutubeSquare size={size} 
                                            color={
                                                item.data.colors.youtube
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
                                            <a target="_blank" href={item.data.link.google}>
                                            <FA.FaGooglePlus size={size} 
                                            color={
                                                item.data.colors.google
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
                                            <a target="_blank" href={item.data.link.github}>
                                            <FA.FaGithub size={size} 
                                            color={
                                                item.data.colors.github
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
                                            <a target="_blank" href={item.data.link.instagram}>
                                            <FA.FaInstagram size={size} 
                                            color={
                                                item.data.colors.instagram
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
                            <div className="item_social_media" >
                            <div
                                key={item.id}
                                style={{textAlign: item.data.alignment}}
                            >
                                {item.data.icons.map( icon => {
                                    if(icon === "facebook")
                                    {
                                        return (
                                            <div
                                            key={icon}
                                            >
                                            <a target="_blank" href={item.data.link.facebook}>
                                            <FA.FaFacebookOfficial size={size} 
                                            color={item.data.colorValue} 
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
                                            <a target="_blank" href={item.data.link.twitter}>
                                            <FA.FaTwitter size={size} 
                                            color={item.data.colorValue} 
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
                                            <a target="_blank" href={item.data.link.linkedin}>
                                            <FA.FaLinkedinSquare size={size} 
                                            color={item.data.colorValue} 
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
                                            <a target="_blank" href={item.data.link.youtube}>
                                            <FA.FaYoutubeSquare size={size} 
                                            color={item.data.colorValue} 
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
                                            <a target="_blank" href={item.data.link.google}>
                                            <FA.FaGooglePlus size={size} 
                                            color={item.data.colorValue} 
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
                                            <a target="_blank" href={item.data.link.github}>
                                            <FA.FaGithub size={size} 
                                            color={item.data.colorValue} 
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
                                            <a target="_blank" href={item.data.link.instagram}>
                                            <FA.FaInstagram size={size} 
                                            color={item.data.colorValue} 
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
            else if(item.type === 'video')
            {
                return (
                    <div
                        // sets styles for each component
                        style={{
                            position: "relative",
                            width: "100%",
                            paddingTop: "56.25%", // for 16:9 aspect ratio
                            overflow: "hidden"
                        }}
                    >
                    <iframe
                        key={item.id} 
                        // sets styles for each component
                        style = {{
                            position: "absolute",
                            top: 0, bottom: 0, left: 0, right: 0
                        }}
                        width = "100%"
                        height = "100%"
                        className="item_video"
                        src={item.data.url} 
                        frameborder="0" 
                    >
                    </iframe>
                    </div>
                );
            }
        });
    }

    componentDidUpdate()
    {
        if(this.props.flag_update)
        {
            console.log("update");
            this.props.update_action();
        }
    }

    render() {

        const { connectDropTarget, hovered, item } = this.props;
        const border = hovered ? "2px solid #6666FF" : "";
        
        if(this.props.items.length === 0)
        {
            this.props.edit_layout_HTML("", this.props.layout_id, this.props.location);

            if(this.props.large)
            {
                return connectDropTarget(
                    <td className="layout_table_cells"
                        colSpan="2"
                    >Drop Contents here.</td>
                );
            }
            else
            {
                return connectDropTarget(
                    <td className="layout_table_cells"
                    >Drop Contents here.</td>
                );
            }
        }
        else
        {
            // this computes the equivalent HTML of all components inside a layout column and saves it
            const html = ReactDOMServer.renderToStaticMarkup(this.renderItemsHTML());
            // call action to save equivalent HTML
            this.props.edit_layout_HTML(html, this.props.layout_id, this.props.location);

            if(this.props.large)
            {
                return connectDropTarget(
                    <td style={{ border, ...this.props.passedStyles }} colSpan="2" >
                        {this.renderItems()} 
                    </td>
                );
            }
            else
            {
                return connectDropTarget(
                    <td style={{ border, ...this.props.passedStyles }} >
                        {this.renderItems()} 
                    </td>
                );
            }
        }
        
    }
}

const styles = {
    
    item_img_container: {
        marginTop:10,
        marginBottom:10,
        width: "100%",
        textAlign: 'center'
    },

    item_img: {
        maxWidth: "100%",
        height: "auto"
    }
}

export default DropTarget('item', spec, collect)(LayoutCell);
