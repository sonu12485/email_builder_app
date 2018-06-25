import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    Button, Label, Input, Col
} from 'reactstrap';

import { edit_styles } from '../../actions/edit_actions';

class styles_h1 extends Component 
{
    constructor(props)
    {
        super(props);

        const id = this.props.id;

        const selectedItem = this.props.items.find( item => {
            return item.id === id
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
        () => {
            this.props.edit_styles(
                this.props.id,
                this.state.styles
            );
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
            () => {
                this.props.edit_styles(
                    this.props.id,
                    this.state.styles
                );
                this.props.update();
            }
            );
    }

    renderBoldInput = () =>
    {
        if(this.state.styles.fontWeight === '')
        {
            return (
                <Col sm={{ size: 10 }}>
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
                <Col sm={{ size: 10 }}>
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
                <Col sm={{ size: 10 }}>
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
                <Col sm={{ size: 10 }}>
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
                <Col sm={{ size: 10 }}>
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
                <Col sm={{ size: 10 }}>
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
            <div>
                <br />
                {this.renderBoldInput()}
                {this.renderItalicInput()}
                {this.renderUnderlineInput()}
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
            <option value={i} >{i}</option>
        ));
    }

    render() 
    {
        return (
            <div className="style_inputs" >
                <div>
                    <Label>Select Font Size</Label>
                    <Input type="select" 
                        value={this.state.styles.fontSize} 
                        onChange = { (event) => {this.onChangeInput("fontSize",event)} }
                    >
                        <option value={''} > </option>
                        {this.renderOptions()}
                    </Input>
                </div>
                <div>
                    <br />
                    <Label>Select Font Family</Label>
                    <Input type="select" 
                        value={this.state.styles.fontFamily} 
                        onChange = { (event) => {this.onChangeInput("fontFamily",event)} }
                    >
                        <option value={'sans-serif'} >sans-serif</option>
                        <option value={'serif'} >serif</option>
                        <option value={'monospace'} >monospace</option>
                        
                    </Input>
                </div>
                <div>
                    {this.renderCheckboxInputs()}
                </div>
                <div>
                    <br />
                    <Label>Select Font Color</Label>
                    <Input type="color" 
                        onChange = { (event) => this.onChangeInput('color',event) } 
                    />
                </div>
                <div>
                    <br />
                    <Label>Select Background Color</Label>
                    <Input type="color" 
                        onChange = { (event) => this.onChangeInput('backgroundColor',event) } 
                    />
                </div>
                <div>
                    <br />
                    <Label>Select Alignment</Label>
                    <Input type="select" 
                        value={this.state.styles.textAlign} 
                        onChange = { (event) => {this.onChangeInput("textAlign",event)} }
                    >
                        <option value={'center'} >Center</option>
                        <option value={'left'} >Left</option>
                        <option value={'right'} >Right</option>
                        
                    </Input>
                </div>
                <div>
                    <br />

                    <Label>Select Top Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingTop} 
                        onChange = { (event) => this.onChangeInput("paddingTop",event) }
                    />

                    <Label>Select Bottom Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingBottom} 
                        onChange = { (event) => this.onChangeInput("paddingBottom",event) }
                    />

                    <Label>Select Left Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingLeft} 
                        onChange = { (event) => this.onChangeInput("paddingLeft",event) }
                    />

                    <Label>Select Right Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingRight} 
                        onChange = { (event) => this.onChangeInput("paddingRight",event) }
                    />

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

export default connect(mapStateToProps, { edit_styles })(styles_h1);