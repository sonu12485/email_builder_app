// styles menu for text components

import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    Button, Label, Input, Col
} from 'reactstrap';

import { edit_styles } from '../../actions/edit_actions';

class Styles_text extends Component 
{
    constructor(props)
    {
        super(props);

        const { id, layout_id, position } = this.props;

        // extract the styles data of given components to be edited and store it in states
        let x;
        const selectedItemArray = this.props.items.map( item => {
            if(item.id === layout_id)
            {
                if(position === 'left')
                {
                    x = item.left.find( component => {
                        return component.id === id
                    });
                    return x;
                }
                else if(position === 'right')
                {
                    x = item.right.find( component => {
                        return component.id === id
                    });
                    return x;
                }
                else if(position === 'center')
                {
                    x = item.center.find( component => {
                        return component.id === id
                    });
                    return x;
                }
            }
        });

        const selectedItem = selectedItemArray.find( item => {
            return item
        });

        this.state={
            styles: selectedItem.styles
        }
    }

    onChangeInput = (key,event) =>
    {
        let val;

        if(
            key === 'fontSize' || key === 'paddingTop' || key === 'paddingBottom' ||
            key === 'paddingLeft' || key === 'paddingRight'
        )
        {
            val = Number(event.target.value);
        }
        else
        {
            val = event.target.value;
        }
        
        this.setState(prevState => {
            return {
                styles: {
                    ...prevState.styles,
                    [key]: val
                }
            }
        },
        // call action that edits styles
        () => {
            this.props.edit_styles(
                this.props.id,
                this.state.styles,
                this.props.layout_id,
                this.props.position
            );
            // update action call for live reload
            this.props.update();
        }
        );
    }

    onCheckboxChange = (key,val) =>
    {
            this.setState(prevState => {
                return {
                    styles: {
                        ...prevState.styles,
                        [key]: val
                    }
                }
            },
            // call action that edits styles
            () => {
                this.props.edit_styles(
                    this.props.id,
                    this.state.styles,
                    this.props.layout_id,
                    this.props.position
                );
                // update action call for live reload
                this.props.update();
            }
            );
    }

    renderBoldInput = () =>
    {
        if(this.state.styles.fontWeight === '')
        {
            return (
                <Col sm={{ size: 4 }}>
                <Label check>
                    <Input type="checkbox" 
                        onChange = { () => this.onCheckboxChange("fontWeight","bold") }
                    />{' '}
                    Bold
                </Label>
                </Col>
            );
        }
        else
        {
            return (
                <Col sm={{ size: 4 }}>
                <Label check>
                    <Input type="checkbox" 
                        onChange = { () => this.onCheckboxChange("fontWeight","") }
                        checked
                    />{' '}
                    Bold
                </Label>
                </Col>
            );
        }
    }

    renderItalicInput = () =>
    {
        if(this.state.styles.fontStyle === '')
        {
            return (
                <Col sm={{ size: 4 }}>
                <Label check>
                    <Input type="checkbox" 
                        onChange = { () => this.onCheckboxChange("fontStyle","italic") }
                    />{' '}
                    Italic
                </Label>
                </Col>
            );
        }
        else
        {
            return (
                <Col sm={{ size: 4 }}>
                <Label check>
                    <Input type="checkbox" 
                        onChange = { () => this.onCheckboxChange("fontStyle","") }
                        checked
                    />{' '}
                    Italic
                </Label>
                </Col>
            );
        }
    }

    renderUnderlineInput = () =>
    {
        if(this.state.styles.textDecoration === '')
        {
            return (
                <Col sm={{ size: 4 }}>
                <Label check>
                    <Input type="checkbox" 
                        onChange = { () => this.onCheckboxChange("textDecoration","underline") }
                    />{' '}
                    Underline
                </Label>
                </Col>
            );
        }
        else
        {
            return (
                <Col sm={{ size: 4 }}>
                <Label check>
                    <Input type="checkbox" 
                        onChange = { () => this.onCheckboxChange("textDecoration","") }
                        checked
                    />{' '}
                    Underline
                </Label>
                </Col>
            );
        }
    }

    renderCheckboxInputs = () => 
    {
        return (
            <div className="row">
                <div className="col-md-2 p-0">
                    {this.renderBoldInput()}
                </div>
                <div className="col-md-3">
                 {this.renderItalicInput()}
                 </div>
                <div className="col-md-4">
                 {this.renderUnderlineInput() }
                </div>
            </div>
        )
    }

    renderOptions = () =>
    {
        let i;
        const num=[];
        for(i=10;i<=80;i+=2)
        {
            num.push(i);
        }
        return num.map( i => (
            <option value={i} key={i} >{i}</option>
        ));
    }

    render() 
    {
        return (
            <div className="col-md-12" >
             <p className="mb-0"><b>Font Style</b></p>
             <div className="col-md-12 form-group">
                    {this.renderCheckboxInputs()}
                </div>
            <p className="mb-0"><b>Font</b></p>
            <div className="row">
                <div className="col-md-4 form-group">
                    <Label>Size</Label>
                    <Input type="select" 
                        value={this.state.styles.fontSize} 
                        onChange = { (event) => {this.onChangeInput("fontSize",event)} }
                    >
                        {this.renderOptions()}
                    </Input>
                </div>
                <div className="col-md-4 form-group">
                    <Label>Family</Label>
                    <Input type="select" 
                        value={this.state.styles.fontFamily} 
                        onChange = { (event) => {this.onChangeInput("fontFamily",event)} }
                    >
                        <option value={'sans-serif'} >sans-serif</option>
                        <option value={'serif'} >serif</option>
                        <option value={'monospace'} >monospace</option>
                        
                    </Input>
                </div>
                <div className="col-md-4 form-group">
                        <Label>Alignment</Label>
                        <Input type="select" 
                            value={this.state.styles.textAlign} 
                            onChange = { (event) => {this.onChangeInput("textAlign",event)} }
                        >
                            <option value={'center'} >Center</option>
                            <option value={'left'} >Left</option>
                            <option value={'right'} >Right</option>
                            
                        </Input>
                    </div>
               
                    <div className="col-md-6 form-group">
                        <Label>Color</Label>
                        <Input type="color" style={{height: 40}}
                            value={this.state.styles.color}
                            onChange = { (event) => this.onChangeInput('color',event) } 
                        />
                    </div>
                    <div className="col-md-6 form-group">
                        <Label>Background Color</Label>
                        <Input type="color" style={{height: 40}}
                            value={this.state.styles.backgroundColor}
                            onChange = { (event) => this.onChangeInput('backgroundColor',event) } 
                        />
                    </div>
                    
                    <div className="col-md-12">
                    <p className="mb-0"><b>Padding</b></p>
                    <div className="row">
                        <div className="col-md-3 form-group">
                        <Label>Top</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingTop} 
                            onChange = { (event) => this.onChangeInput("paddingTop",event) }
                        />
                        </div>
                         <div className="col-md-3 form-group">
                        <Label>Bottom</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingBottom} 
                            onChange = { (event) => this.onChangeInput("paddingBottom",event) }
                        />
                         </div>
                         <div className="col-md-3 form-group">
                        <Label>Left</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingLeft} 
                            onChange = { (event) => this.onChangeInput("paddingLeft",event) }
                        />
                         </div>
                         <div className="col-md-3 form-group">
                         <Label>Right</Label>
                        <Input type="number" 
                            value={this.state.styles.paddingRight} 
                            onChange = { (event) => this.onChangeInput("paddingRight",event) }
                        />
                        </div>
                        </div>
                      </div>
                    </div>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { edit_styles })(Styles_text);