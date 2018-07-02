import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DropTarget } from 'react-dnd';

import { update as update_action } from '../actions/index';

import ReactDOMServer from 'react-dom/server';

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
    renderItems = () =>
    {
        return this.props.items.map( item => {
            if(item.type === 'h1')
            {
                let style = {};

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                return (
                    /*<h1 style={style} 
                        className="item_h1"
                        key={item.id} 
                        onClick={ () => {
                            this.props.edit_h1(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        {item.data}
                    </h1>*/
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

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                return (
                    /*<h3 style={style} 
                        key={item.id} 
                        className="item_h3"
                        onClick={ () => {
                            this.props.edit_h3(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        {item.data}
                    </h3>*/
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
                return (
                    /*<div key={item.id} 
                        className="item_hr"
                        onClick={ () => {
                            this.props.edit_hr(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                    <hr />
                    </div>*/
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

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            style[key.toString()] = value;
                        }
                    }
                );

                return (
                    /*<div key={item.id} 
                        style={style} 
                        className="item_p"
                        onClick={ () => {
                            this.props.edit_p(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        <p>{item.data}</p>
                    </div>*/
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
                return (
                    /*<div key={item.id} 
                        style={styles.item_img_container}
                        className="item_img"
                        onClick={ () => {
                            this.props.edit_img(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        <img src={item.src} style={styles.item_img} />
                    </div>*/
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
                return (
                    /*<div key={item.id}
                        className="item_btn"
                        style={{
                            textAlign: item.data.alignment,
                            ...item.data.style
                        }}
                        onClick={ () => {
                            this.props.edit_btn(item.id, this.props.layout_id, this.props.location)
                        } }
                    >
                        <Button
                            color={item.data.color}
                            href={item.data.url}
                            size={item.data.size}
                            block={item.data.block}
                            target={item.data.target}
                        >{item.data.name}</Button>
                    </div>*/
                    <LayoutCellItem 
                        key={item.id} 
                        { ...this.props }
                        type="btn"
                        item={item}
                    />
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
            const html = ReactDOMServer.renderToStaticMarkup(this.renderItems());
            this.props.edit_layout_HTML(html, this.props.layout_id, this.props.location);

            if(this.props.large)
            {
                return connectDropTarget(
                    <td style={{ border }} colSpan="2" >
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

export default DropTarget('item', spec, collect)(LayoutCell);
