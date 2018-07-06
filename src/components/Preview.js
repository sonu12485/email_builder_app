import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';

import ReactToPrint from "react-to-print";

import ReactDOMServer from 'react-dom/server';

import { DropTarget } from 'react-dnd';

import { 
    edit_h1, edit_h3, edit_hr, edit_p, edit_img, 
    edit_layout_HTML, edit_layout, edit_btn, dnd_items,
    edit_HTML, edit_icons 
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
                    let style = {
                        ...styles.layout_table
                    };

                    let passedStyles = {};

                    Object.entries(item.styles).forEach(
                        ([key, value]) => {
                            if(value)
                            {
                                style[key.toString()] = value;
                                passedStyles[key.toString()] = value;
                            }
                        }
                    );

                    return (
                        <table className="layout"
                            style={style} key={item.id} 
                            onClick={ () => this.props.edit_layout(item.id) }
                        >
                        <tbody>
                            
                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="center"
                                    items={item.center}
                                    passedStyles={passedStyles}
                                />
                            </tr>

                        </tbody>
                        </table>
                    );
                }
                else if(item.layout_type === 1)
                {
                    let style = {
                        ...styles.layout_table
                    };

                    let passedStyles = {};

                    Object.entries(item.styles).forEach(
                        ([key, value]) => {
                            if(value)
                            {
                                style[key.toString()] = value;
                                passedStyles[key.toString()] = value;
                            }
                        }
                    );

                    return (
                        <table  className="layout"
                            style={style} key={item.id} 
                            onClick={ () => this.props.edit_layout(item.id) }
                        >
                        <tbody>

                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="left"
                                    items={item.left}
                                    passedStyles={passedStyles}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="right"
                                    items={item.right}
                                    passedStyles={passedStyles}
                                />
                            </tr>

                        </tbody>
                        </table>
                    );
                }
                else if(item.layout_type === 2)
                {
                    let style = {
                        ...styles.layout_table
                    };

                    let passedStyles = {};                    

                    Object.entries(item.styles).forEach(
                        ([key, value]) => {
                            if(value)
                            {
                                style[key.toString()] = value;
                                passedStyles[key.toString()] = value;
                            }
                        }
                    );

                    return (
                        <table className="layout" 
                            style={style} key={item.id} 
                            onClick={ () => this.props.edit_layout(item.id) }
                        >
                        <tbody>

                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="left"
                                    items={item.left}
                                    passedStyles={passedStyles}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="center"
                                    items={item.center}
                                    passedStyles={passedStyles}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="right"
                                    items={item.right}
                                    passedStyles={passedStyles}
                                />
                            </tr>

                        </tbody>
                        </table>
                    );
                }
                else if(item.layout_type === 3)
                {
                    let style = {
                        ...styles.layout_table
                    };

                    let passedStyles = {};

                    Object.entries(item.styles).forEach(
                        ([key, value]) => {
                            if(value)
                            {
                                style[key.toString()] = value;
                                passedStyles[key.toString()] = value;
                            }
                        }
                    );

                    return (
                        <table  className="layout"
                            style={style} key={item.id} 
                            onClick={ () => this.props.edit_layout(item.id) }
                        >
                        <tbody>

                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="left"
                                    items={item.left}
                                    large={true}
                                    passedStyles={passedStyles}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="right"
                                    items={item.right}
                                    passedStyles={passedStyles}
                                />
                            </tr>

                        </tbody>
                        </table>
                    );
                }
                else if(item.layout_type === 4)
                {
                    let style = {
                        ...styles.layout_table
                    };

                    let passedStyles = {};

                    Object.entries(item.styles).forEach(
                        ([key, value]) => {
                            if(value)
                            {
                                style[key.toString()] = value;
                                passedStyles[key.toString()] = value;
                            }
                        }
                    );

                    return (
                        <table  className="layout"
                            style={style} key={item.id} 
                            onClick={ () => this.props.edit_layout(item.id) }
                        >
                        <tbody>

                            <tr className="primary_row" >
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="left"
                                    items={item.left}
                                    passedStyles={passedStyles}
                                />
                                <LayoutCell 
                                    {...this.props}
                                    layout_id={item.id} 
                                    location="right"
                                    items={item.right}
                                    large={true}
                                    passedStyles={passedStyles}
                                />
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
    constructor(props)
    {
        super(props);

        this.state = {
            DesktopView: true 
        };
    }

    renderItems = () =>
    {
        return this.props.items.map( item => {
            if(item.layout_type === 0)
            {
                let style = {
                    ...styles.layout_table
                };

                let insideStyle = {};

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            insideStyle[key.toString()] = value;
                        }
                    }
                );

                return (
                    <table style={style} key={item.id} >
                    <tbody>
                        <tr>
                            <td style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.centerHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
            else if(item.layout_type === 1)
            {
                let style = {
                    ...styles.layout_table
                };

                let insideStyle = {};                

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            insideStyle[key.toString()] = value;
                            if( key === "backgroundColor" )
                            {
                                style[key.toString()] = value;
                            }
                        }
                    }
                );

                return (
                    <table style={style} key={item.id} >
                    <tbody>
                        <tr>
                            <td  style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td  style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.rightHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
            else if(item.layout_type === 2)
            {
                let style = {
                    ...styles.layout_table
                };

                let insideStyle = {};

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            insideStyle[key.toString()] = value;
                            if( key === "backgroundColor" )
                            {
                                style[key.toString()] = value;
                            }
                        }
                    }
                );

                return (
                    <table style={style} key={item.id} >
                    <tbody>
                        <tr>
                            <td style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.centerHTML }}
                            />
                            <td style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.rightHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
            else if(item.layout_type === 3)
            {
                let style = {
                    ...styles.layout_table
                };

                let insideStyle = {};

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            insideStyle[key.toString()] = value;
                            if( key === "backgroundColor" )
                            {
                                style[key.toString()] = value;
                            }
                        }
                    }
                );

                return (
                    <table style={style} key={item.id} >
                    <tbody>
                        <tr>
                            <td colSpan="2" style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.rightHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
            else if(item.layout_type === 4)
            {
                let style = {
                    ...styles.layout_table
                };

                let insideStyle = {};

                Object.entries(item.styles).forEach(
                    ([key, value]) => {
                        if(value)
                        {
                            insideStyle[key.toString()] = value;
                            if( key === "backgroundColor" )
                            {
                                style[key.toString()] = value;
                            }
                        }
                    }
                );

                return (
                    <table style={style} key={item.id} >
                    <tbody>
                        <tr>
                            <td style={insideStyle}
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td colSpan="2" style={insideStyle}
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
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
                integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
                crossorigin="anonymous" 
            />
            <div style={ style } >
                <div style={{ width: '100%', minHeight: '100vh' }} >
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

    renderViewOptions = () =>
    {
        if(this.state.DesktopView)
        {
            return (
                <div className="tabs_container" >
                <div className="tabs" >

                <div className="tab active" >
                    <div>Desktop</div>
                </div>

                <div className="tab inactive" 
                    onClick = { () => {
                        this.setState({
                            DesktopView: false
                        });
                    }}
                >
                    <div>Mobile</div>
                </div>
                
                </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="tabs_container" >
                <div className="tabs" >

                <div className="tab inactive" 
                    onClick = { () => {
                        this.setState({
                            DesktopView: true
                        });
                    }}
                >
                    <div>Desktop</div>
                </div>

                <div className="tab active" >
                    <div>Mobile</div>
                </div>
                
                </div>
                </div>
            );
        }
    }
    renderPreview = () =>
    {
        if(this.state.DesktopView)
        {
            return <Preview {...this.props} />
        }
        else
        {
            return (
                <div className="preview_container" >
                    <div style={{width: 400}} >
                        <Preview {...this.props} />
                    </div>
                </div>
            );
        }
    }

    render()
    {
        return (
            <div>
                <div>
                <div className="header" >
                            <div>
                                <h4><b>Preview</b></h4>
                            </div>

                            <div style={{width: "30%"}} >   
                                {this.renderViewOptions()}
                            </div>

                            <div>
                                <div className="btn_container" >
                                    <div style={{margin: 10}} >
                                        <Button color="primary"
                                            onClick={ () => {
                                                this.download()                           
                                            }} className="btn-sm btn-block"
                                        >SAVE</Button>
                                    </div>
                                    <div>
                                        <Button color="danger"
                                            onClick={ () => window.location.reload() } className="btn-sm btn-block"
                                        >CANCEL</Button>
                                    </div>
                                </div>
                            </div>
                </div>
                {this.renderPreview()}

            </div>
            </div>
        );
    }
}

const styles = {
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
    edit_layout_HTML,
    edit_layout,
    edit_btn,
    dnd_items,
    edit_HTML,
    edit_icons
})(DropTarget('layout', {}, collect)(FullPreview));
