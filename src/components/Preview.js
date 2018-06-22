import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';

import ReactToPrint from "react-to-print";

import ReactDOMServer from 'react-dom/server';

import { DropTarget } from 'react-dnd';

import { 
    edit_h1, edit_h3, edit_hr, edit_p 
} from '../actions/edit_actions';
import { update as update_action } from '../actions/index';

function collect(connect, monitor)
{
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class Preview extends Component 
{

    renderItems = () => 
    {
        return this.props.items.map( item => {
            if(item.type === 'h1')
            {
                return (
                    <h1 style={styles.item_h1} 
                        className="item_h1"
                        key={item.id} 
                        onClick={ () => {
                            this.props.edit_h1(item.id)
                        }}
                        dangerouslySetInnerHTML={{__html: item.data}}
                    >
                    </h1>
                );
            }
            else if(item.type === 'h3')
            {
                return (
                    <h3 style={styles.item_h1} 
                        key={item.id} 
                        className="item_h3"
                        onClick={ () => {
                            this.props.edit_h3(item.id)
                        }}
                        dangerouslySetInnerHTML={{__html: item.data}}
                    >
                    </h3>
                );
            }
            else if(item.type === 'hr')
            {
                return (
                    <div key={item.id} 
                        className="item_hr"
                        onClick={ () => {
                            this.props.edit_hr(item.id)
                        }}
                    >
                    <hr />
                    </div>
                );
            }
            else if(item.type === 'p')
            {
                return (
                    <div key={item.id} 
                        style={styles.item_p} 
                        className="item_p"
                        onClick={ () => {
                            this.props.edit_p(item.id)
                        }}
                    >
                        <p
                            dangerouslySetInnerHTML={{__html: item.data}}
                        ></p>
                    </div>
                );
            }
            else if(item.type === 'img')
            {
                return (
                    <div style={styles.item_img} key={item.id} >
                        <img src={item.src} />
                    </div>
                );
            }
        });
    }

    componentDidUpdate()
    {
        if(this.props.flag_update)
        {
            console.log("hello");
            this.forceUpdate();
            this.props.update_action();
        }
    }

    render() 
    {
        const { connectDropTarget, hovered, item } = this.props;
        
        return connectDropTarget(
            <div className="preview" >
                {this.renderItems()}
            </div>
        );
    }
}

class FullPreview extends Component
{
    
    download()
    {
        var element = document.createElement('a');
        const htmlString = ReactDOMServer.renderToStaticMarkup(<Preview {...this.props} />);
        //console.log(htmlString);
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(htmlString));
        element.setAttribute('download', "email.html");
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
    }

    render()
    {
        return (
            <div>
                <div className="header" >
                    <div><h3>Preview</h3></div>
                    <div>

                        <Button color="primary"
                            onClick={ () => {
                                this.download()                           
                            }}
                        >SAVE</Button>{"  "}
                        <Button color="danger"
                            onClick={ () => window.location.reload() }
                        >CANCEL</Button>

                    </div>
                </div>
                <Preview {...this.props} />

            </div>
        );
    }
}

const styles = {
    item_h1: {
        textAlign: "center"
    },
    
    item_h3: {
        textAlign: "center"
    },
    
    item_p: {
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 16,
    },
    
    item_img: {
        display: "flex",
        justifyContent: "center",
        margin: 10,
        objectFit: "contain"
    }
}

function mapStateToProps(state)
{
    return { 
        items: state.items,
        flag_update: state.update
    }
}

export default connect(mapStateToProps, {
    edit_h1,
    edit_h3,
    edit_hr,
    edit_p,
    update_action
})(DropTarget('item', {}, collect)(FullPreview));
