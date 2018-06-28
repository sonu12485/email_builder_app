import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Badge } from 'reactstrap';

import ReactToPrint from "react-to-print";

import ReactDOMServer from 'react-dom/server';

import { DropTarget } from 'react-dnd';

import { 
    edit_h1, edit_h3, edit_hr, edit_p, edit_img, edit_layout_HTML, delete_layout 
} from '../actions/edit_actions';

import { update as update_action } from '../actions/index';

import LayoutCell from './LayoutCell';

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
        console.log(this.props.items);
        return this.props.items.map( item => {
                if(item.layout_type === 0)
                {
                    return (
                        <table className="layout"
                            style={styles.layout_table} key={item.id} 
                        >
                        <tbody>
                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="center"
                                    items={item.center}
                                />
                            </tr>

                            <tr className="badge" >
                                <td><h5>
                                <Badge color="primary"> MOVE LAYOUT </Badge>
                                </h5></td>
                                <td><h5>
                                <Badge color="danger"
                                    onClick={ () => this.props.delete_layout(item.id) }
                                > DELETE LAYOUT </Badge>
                                </h5></td>
                            </tr>

                        </tbody>
                        </table>
                    );
                }
                else if(item.layout_type === 1)
                {
                    return (
                        <table  className="layout"
                            style={styles.layout_table} key={item.id} 
                        >
                        <tbody>
                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="left"
                                    items={item.left}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="right"
                                    items={item.right}
                                />
                            </tr>

                            <tr className="badge" >
                                <td><h5>
                                <Badge color="primary"> MOVE LAYOUT </Badge>
                                </h5></td>
                                <td><h5>
                                <Badge color="danger"
                                    onClick={ () => this.props.delete_layout(item.id) }
                                > DELETE LAYOUT </Badge>
                                </h5></td>
                            </tr>

                        </tbody>
                        </table>
                    );
                }
                else if(item.layout_type === 2)
                {
                    return (
                        <table className="layout" 
                            style={styles.layout_table} key={item.id} 
                        >
                        <tbody>
                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="left"
                                    items={item.left}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="center"
                                    items={item.center}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="right"
                                    items={item.right}
                                />
                            </tr>

                            <tr className="badge" >
                                <td><h5>
                                <Badge color="primary"> MOVE LAYOUT </Badge>
                                </h5></td>
                                <td><h5>
                                <Badge color="danger"
                                    onClick={ () => this.props.delete_layout(item.id) }
                                > DELETE LAYOUT </Badge>
                                </h5></td>
                            </tr>

                        </tbody>
                        </table>
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

    render() 
    {
        const { connectDropTarget, hovered, item } = this.props;

        const style= { ...this.props.body };
        
        return connectDropTarget(
            <div className="preview_container" >
            <div className="preview" 
                style={ style }
            >
                {this.renderItems()}
            </div>
            </div>
        );
    }
}

class FullPreview extends Component
{
    renderItems = () =>
    {
        return this.props.items.map( item => {
            if(item.layout_type === 0)
            {
                return (
                    <table style={styles.layout_table} key={item.id} >
                    <tbody>
                        <tr>
                            <td 
                                dangerouslySetInnerHTML={{ __html: item.centerHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
            else if(item.layout_type === 1)
            {
                return (
                    <table style={styles.layout_table} key={item.id} >
                    <tbody>
                        <tr>
                            <td 
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td 
                                dangerouslySetInnerHTML={{ __html: item.rightHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
            else if(item.layout_type === 2)
            {
                return (
                    <table style={styles.layout_table} key={item.id} >
                    <tbody>
                        <tr>
                            <td 
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td 
                                dangerouslySetInnerHTML={{ __html: item.centerHTML }}
                            />
                            <td 
                                dangerouslySetInnerHTML={{ __html: item.rightHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
    });
    }

    renderStaticPage = () =>
    {
        const style= { ...this.props.body };

        return (
            <div style={styles.HTMLPageContainer} >
            <div style={ style } >
                <div style={{ width: '100%', height: '100vh' }} >
                {this.renderItems()}
                </div>
            </div>
            </div>
        );
    }
    
    download()
    {
        var element = document.createElement('a');
        const htmlString = ReactDOMServer.renderToStaticMarkup(this.renderStaticPage());
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
    },

    layout_table: {
        width: '90%',
        margin: 10,
        marginLeft: "5%",
        marginRight: "5%",
        tableLayout: "fixed", 
    },

    HTMLPageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee"
    }
}

function mapStateToProps(state)
{
    return { 
        items: state.items,
        flag_update: state.update,
        body: state.body
    }
}

export default connect(mapStateToProps, {
    edit_h1,
    edit_h3,
    edit_hr,
    edit_p,
    edit_img,
    update_action,
    update_action,
    edit_layout_HTML,
    delete_layout
})(DropTarget('layout', {}, collect)(FullPreview));
