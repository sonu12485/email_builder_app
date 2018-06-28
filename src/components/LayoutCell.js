import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DropTarget } from 'react-dnd';

import { update as update_action } from '../actions/index';

import ReactDOMServer from 'react-dom/server';

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
                    <h1 style={style} 
                        className="item_h1"
                        key={item.id} 
                        onClick={ () => {
                            this.props.edit_h1(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        {item.data}
                    </h1>
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
                    <h3 style={style} 
                        key={item.id} 
                        className="item_h3"
                        onClick={ () => {
                            this.props.edit_h3(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        {item.data}
                    </h3>
                );
            }
            else if(item.type === 'hr')
            {
                return (
                    <div key={item.id} 
                        className="item_hr"
                        onClick={ () => {
                            this.props.edit_hr(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                    <hr />
                    </div>
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
                    <div key={item.id} 
                        style={style} 
                        className="item_p"
                        onClick={ () => {
                            this.props.edit_p(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        <p>{item.data}</p>
                    </div>
                );
            }
            else if(item.type === 'img')
            {
                return (
                    <div key={item.id} 
                        style={styles.item_img_container}
                        className="item_img"
                        onClick={ () => {
                            this.props.edit_img(item.id, this.props.layout_id, this.props.location)
                        }}
                    >
                        <img src={item.src} style={styles.item_img} />
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

            return connectDropTarget(
                <td className="layout_table_cells"
                >Drop Components here.</td>
            );
        }
        else
        {
            const html = ReactDOMServer.renderToStaticMarkup(this.renderItems());
            this.props.edit_layout_HTML(html, this.props.layout_id, this.props.location);

            return connectDropTarget(
                <td style={{ border }} >
                    {this.renderItems()} 
                </td>
            );
        }
        
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

export default DropTarget('item', spec, collect)(LayoutCell);
