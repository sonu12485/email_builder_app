import React, { Component } from 'react';

import { connect } from 'react-redux';

import { edit_layout_styles } from '../../actions/edit_actions';

import {
    Button, Label, Input
} from 'reactstrap';

class Styles_layout extends Component 
{
    constructor(props)
    {
        super(props);

        const selectedLayout = this.props.items.find( item => {
            return item.id === this.props.id
        });

        this.state  = {
            styles: selectedLayout.styles
        }
    }

    onChangeInput = (key,val) =>
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
            this.props.edit_layout_styles(
                this.props.id,
                this.state.styles
            );
            this.props.update();
        }
        );
    }

    render() 
    {
        return (
            <div className="style_inputs" >
                
                <br />
                <div>
                    <Label>Select Background Color</Label><br />
                    <Input type="color" style={{height: 40}}
                        value={this.state.styles.backgroundColor}
                        onChange = { (event) => this.onChangeInput(
                            'backgroundColor',event.target.value
                        ) } 
                    />
                </div>

                <div>
                    <br />

                    <Label>Select Top Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingTop} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingTop",Number(event.target.value)
                        ) }
                    />

                    <Label>Select Bottom Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingBottom} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingBottom",Number(event.target.value)
                        ) }
                    />

                    <Label>Select Left Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingLeft} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingLeft",Number(event.target.value)
                        ) }
                    />

                    <Label>Select Right Padding</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingRight} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingRight",Number(event.target.value)
                        ) }
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

export default connect(mapStateToProps, {
    edit_layout_styles
})(Styles_layout);