// the preview component of the app

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    Button, Modal, ModalHeader, ModalBody, Label, Input 
} from 'reactstrap';

import { withRouter } from 'react-router-dom';

import ReactToPrint from "react-to-print";

import ReactDOMServer from 'react-dom/server';

import { DropTarget } from 'react-dnd';

import { 
    edit_h1, edit_h3, edit_hr, edit_p, edit_img, 
    edit_layout_HTML, edit_layout, edit_btn, dnd_items,
    edit_HTML, edit_icons, edit_video 
} from '../actions/edit_actions';

import { saveTemplate } from '../actions/template_actions';

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

// in this component all the layouts and components present in the items array will be rendered
class Preview extends Component 
{
    // renders all the layouts that are present in the items array
    renderItems = () => 
    {
        //console.log(this.props.items);
        return this.props.items.map( item => {
                if(item.layout_type === 0)
                {
                    let style = {
                        ...styles.layout_table
                    };

                    let passedStyles = {};

                    // sets styles for each layout
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
                                {/* All the components in a column of layout will be rendered inside LayoutCell component */}
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

                    // sets styles for each layout
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
                                {/* All the components in a column of layout will be rendered inside LayoutCell component */}
                                {/* One LayoutCell for each column */}
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

                    // sets styles for each layout
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
                                {/* All the components in a column of layout will be rendered inside LayoutCell component */}
                                {/* One LayoutCell for each column */}
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

                    // sets styles for each layout
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
                                {/* All the components in a column of layout will be rendered inside LayoutCell component */}
                                {/* One LayoutCell for each column */}
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

                    // sets styles for each layout
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
                                {/* All the components in a column of layout will be rendered inside LayoutCell component */}
                                {/* One LayoutCell for each column */}
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
            DesktopView: true,
            modal: false,
            name: ''
        };
    }

    // this renderItems() renders all the layouts with thier equivalent column HTML for the final download
    renderItems = () =>
    {
        return this.props.items.map( item => {
            if(item.layout_type === 0)
            {
                let style = {
                    ...styles.layout_table
                };

                let insideStyle = {};

                // sets styles for each layout
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
                                // assigning equivalent HTML to the corresponding layout columns 
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

                // sets styles for each layout
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
                                // assigning equivalent HTML to the corresponding layout columns 
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td  style={insideStyle}
                                // assigning equivalent HTML to the corresponding layout columns 
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

                // sets styles for each layout
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
                                // assigning equivalent HTML to the corresponding layout columns 
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td style={insideStyle}
                                // assigning equivalent HTML to the corresponding layout columns 
                                dangerouslySetInnerHTML={{ __html: item.centerHTML }}
                            />
                            <td style={insideStyle}
                                // assigning equivalent HTML to the corresponding layout columns 
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

                // sets styles for each layout
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
                                // assigning equivalent HTML to the corresponding layout columns 
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td style={insideStyle}
                                // assigning equivalent HTML to the corresponding layout columns 
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

                // sets styles for each layout
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
                                // assigning equivalent HTML to the corresponding layout columns 
                                dangerouslySetInnerHTML={{ __html: item.leftHTML }}
                            />
                            <td colSpan="2" style={insideStyle}
                                // assigning equivalent HTML to the corresponding layout columns 
                                dangerouslySetInnerHTML={{ __html: item.rightHTML }}
                            />
                        </tr>
                    </tbody>
                    </table>
                );
            }
    });
    }

    // this renders the complete static page/email that can be downloaded
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
    
    // this downloads the static page/email created as "email.html"
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

    // this renders desktop & mobile viewing options
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

    // renders the complete preview
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

    toggle = () =>
    {
        this.setState(prevState => {
            return {
                ...prevState,
                modal: !prevState.modal
            }
        });
    }

    onNameChange = (val) =>
    {
        this.setState({
            name: val
        });
    }

    renderSaveBtn = () => 
    {
        // check if name of template is empty or not
        if(this.state.name === '')
        {
            return (
                <Button color="primary"
                    disabled
                >SAVE</Button>
            );
        }
        else
        {
            return (
                <Button color="primary"
                    onClick = { () => {
                        //call action to save current preview as a template
                        this.props.saveTemplate(
                            this.state.name,
                            JSON.stringify(this.props.items),
                            JSON.stringify(this.props.body)
                        );
                        this.toggle();
                    }}
                >SAVE</Button>
            );
        }
    }

    render()
    {
        return (
            <div>
                {/* Modal to enter name of the template to be saved */}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Save as Template</ModalHeader>
                <ModalBody style={{padding: 30}} >
                    
                    <Label>Enter a name for the template</Label>
                    <Input
                        value={this.state.name} 
                        onChange = { (event) => this.onNameChange(event.target.value) }
                    />

                </ModalBody>
                <div className="btn_container" >
                    {this.renderSaveBtn()}
                </div>
                </Modal>

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
                                    <div style={{margin: 5}} >
                                        <Button color="primary"
                                            onClick={ () => this.toggle()} 
                                            className="btn-sm btn-block"
                                        >SAVE</Button>
                                    </div>
                                    <div style={{margin: 5}} >
                                        <Button color="success"
                                            onClick={ () => {
                                                this.download()                           
                                            }} className="btn-sm btn-block"
                                        >DOWNLOAD</Button>
                                    </div>
                                    <div style={{margin: 5}} >
                                        <Button color="danger"
                                            onClick={ () => window.location.reload() } className="btn-sm btn-block"
                                        >ERASE</Button>
                                    </div>
                                    <div style={{margin: 5}} >
                                        <Button color="primary"
                                            onClick={ () => this.props.history.push('/home') } 
                                            className="btn-sm btn-block"
                                        >BACK</Button>
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

export default withRouter(connect(mapStateToProps, {
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
    edit_icons,
    saveTemplate,
    edit_video
})(DropTarget('layout', {}, collect)(FullPreview)));
