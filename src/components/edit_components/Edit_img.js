// edit menu for images

import React, { Component } from 'react';

import { 
    Button, InputGroup, InputGroupAddon, Input, Label
} from 'reactstrap';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { 
    edit_img, delete_item, edit_img_src, edit_layout, edit_img_link,
    duplicate_item, image_rotate, edit_styles
} from '../../actions/edit_actions';

import * as FA from 'react-icons/lib/fa';

class Edit_img extends Component 
{
    constructor(props)
    {
        super(props);

        if(this.props.is_layout_edit)
        {
            this.props.edit_layout();
        }

        // extract the data of image to be edited and store it in states
        let x;
        const selectedItemArray = this.props.items.map( item => {
            if(item.id === this.props.data.layout_id)
            {
                if(this.props.data.position === 'left')
                {
                    x = item.left.find( component => {
                        return component.id === this.props.data.id
                    });
                    return x;
                }
                else if(this.props.data.position === 'right')
                {
                    x = item.right.find( component => {
                        return component.id === this.props.data.id
                    });
                    return x;
                }
                else if(this.props.data.position === 'center')
                {
                    x = item.center.find( component => {
                        return component.id === this.props.data.id
                    });
                    return x;
                }
            }
        });

        const selectedItem = selectedItemArray.find( item => {
            return item
        });

        const data = selectedItem;
        const styles = selectedItem.styles;

        this.state={
            img_src: null,
            data,
            styles
        }
    }

    onSrcChange = (event) =>
    {
        this.setState({
            img_src: event.target.value
        });
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        // call action to delete
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_img();
    }

    submitImgSrc = () =>
    {
        const { id, layout_id, position } = this.props.data;

        // call action that edits src
        this.props.edit_img_src(
            id,
            this.state.img_src,
            layout_id,
            position
        );
        // update action call for live reload
        this.props.update();
    }

    onLinkChange = (val) =>
    {
        const { id, layout_id, position } = this.props.data;

        this.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    link: val
                }
            }
        },
        // call action that edits link
        () => {
            this.props.edit_img_link(
                id,
                this.state.data.link,
                layout_id,
                position
            );
            this.props.update();
        }
        );
    }

    onItemDuplicate = () =>
    {
        // call action to duplicate
        this.props.duplicate_item(
            this.props.data.id,
            this.props.data.layout_id,
            this.props.data.position
        );
        this.props.update();
    }

    onImageRotate = (val) =>
    {
        // call action that rotates image 
        this.props.image_rotate(
            this.props.data.id,
            val,
            this.props.data.layout_id,
            this.props.data.position
        );
        this.props.update();
    }

    onFullWidthChange = (val) =>
    {
        const { id, layout_id, position } = this.props.data;

        this.setState(prevState => {
            return {
                ...prevState,
                styles: {
                    ...prevState.styles,
                    fullWidth: val
                }
            }
        },
        // call action that edits image styles
        () => {
            this.props.edit_styles(
                id,
                this.state.styles,
                layout_id,
                position
            );
            this.props.update();
        }
        );
    }

    renderFullWidthCheckbox = () =>
    {
        if(this.state.styles.fullWidth)
        {
            return (
                <div className="image_style_checkbox_input" >
                    <Label check>
                        <Input type="checkbox" 
                            onChange = { () => this.onFullWidthChange(false) }
                            checked
                        />{' '}
                        Full Width
                    </Label>
                    <br />
                </div>
            );
        }
        else
        {
            return (
                <div className="image_style_checkbox_input" >
                    <Label check>
                        <Input type="checkbox" 
                            onChange = { () => this.onFullWidthChange(true) }
                        />{' '}
                        Full Width
                    </Label>
                    <br />
                </div>
            );
        }
    }

    onChangeStyles = (key,val) =>
    {
        const { id, layout_id, position } = this.props.data;

        this.setState(prevState => {
            return {
                ...prevState,
                styles: {
                    ...prevState.styles,
                    [key]: val
                }
            }
        },
        // call action that edits image styles
        () => {
            this.props.edit_styles(
                id,
                this.state.styles,
                layout_id,
                position
            );
            this.props.update();
        }
        );
    }

    render() 
    {
        return (
            <div>

                <div className="col-md-12 mt-3 btnSection">
                   <div className="row">
                     <div className="col-sm-4">
                        <Button color="primary" 
                            onClick={ () => this.onItemDuplicate() } className="btn-sm btn-block"
                        >DUPLICATE</Button>
                    </div>
                     <div className="col-sm-4">
                        <Button color="success" 
                            onClick={ () => this.props.edit_img() } className="btn-sm btn-block"
                        >DONE</Button>
                    </div>
                     <div className="col-sm-4">
                        <Button color="danger" 
                            onClick={ () => this.deleteElement() } className="btn-sm btn-block"
                        >DELETE</Button>
                    </div>
                  </div>
                </div>

                <div className="btn_container" >
                    <FA.FaMailReply size={40} 
                        color="#345F90" 
                        style={{margin: 5}}         
                        onClick={ () => this.onImageRotate(-90) }                                
                    />
                    <FA.FaMailForward size={40} 
                        color="#345F90" 
                        style={{margin: 5}}   
                        onClick={ () => this.onImageRotate(90) }                                      
                    />
                </div>
                
                <div>
                    <div className="img_input_conatiner" >
                    <InputGroup>
                        <Input placeholder="Enter Image URL" 
                            onChange={ (event) => { this.onSrcChange(event) }}
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" 
                                onClick={ () => this.submitImgSrc()}
                            >SUBMIT</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </div>
                </div>

                <div>
                    <h4 style={{textAlign: "center"}} >OR</h4>
                </div>

                <div className="btn_container form-group" >
                    <Button color="primary" 
                        onClick={ () => {this.props.history.push("/store")} }
                    >UPLOAD FROM STORE</Button>
                </div>

                <div  className="col-md-12">
                    <div className=" form-group" >
                        <Label>
                            Enter Image Link, if any 
                        </Label>
                        <Input 
                            value={this.state.data.link}
                            onChange={ (event) => this.onLinkChange(
                                event.target.value.toString()
                            ) }
                        />
                    </div>
                </div>
                <div className="col-sm-12">
                <div className="row">
                    <div className="col-md-6 form-group" >
                        <Label>Select Alignment</Label>
                        <Input type="select" 
                            value={this.state.styles.textAlign} 
                            onChange = { (event) => {this.onChangeStyles(
                                "textAlign",event.target.value
                            )} }
                        >
                            <option value={'left'} >Left</option>
                            <option value={'center'} >Center</option>
                            <option value={'right'} >Right</option>
                            
                        </Input>
                    </div>

                    <div className="col-md-6 form-group edit_image_checkbox" >
                        {this.renderFullWidthCheckbox()}
                    </div>
                </div>
                </div>

                <div className="col-md-12">
                    <p className="mb-0"><b>Padding</b></p>
                    <div className="row">
                        <div className="col-md-3 form-group">
                        <Label>Top</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingTop} 
                            onChange = { (event) => this.onChangeStyles(
                                "paddingTop",Number(event.target.value)
                            ) }
                        />
                        </div>
                         <div className="col-md-3 form-group">
                        <Label>Bottom</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingBottom} 
                            onChange = { (event) => this.onChangeStyles(
                                "paddingBottom",Number(event.target.value)
                            ) }
                        />
                         </div>
                         <div className="col-md-3 form-group">
                        <Label>Left</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingLeft} 
                            onChange = { (event) => this.onChangeStyles(
                                "paddingLeft",Number(event.target.value)
                            ) }
                        />
                         </div>
                         <div className="col-md-3 form-group">
                         <Label>Right</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingRight} 
                            onChange = { (event) => this.onChangeStyles(
                                "paddingRight",Number(event.target.value)
                            ) }
                        />
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.img_edit,
        items: state.items,
        is_layout_edit: state.layout_edit.val
    }
}

export default withRouter(connect(mapStateToProps, {
    edit_img,
    delete_item,
    edit_img_src,
    edit_layout,
    edit_img_link,
    duplicate_item,
    image_rotate,
    edit_styles
})(Edit_img));
