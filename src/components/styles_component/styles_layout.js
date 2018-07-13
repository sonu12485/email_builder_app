// styles menu for layouts

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

        // extract the styles data of given layout to be edited and store it in states
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
        // call action that edits styles of layouts
        () => {
            this.props.edit_layout_styles(
                this.props.id,
                this.state.styles
            );
            // update action call for live reload
            this.props.update();
        }
        );
    }

    render() 
    {
        return (
            <div className="mt-3" >
                <div className="col-md-12 form-group">
                    <Label>Select Background Color</Label>
                    <Input type="color" style={{height: 40}}
                        value={this.state.styles.backgroundColor}
                        onChange = { (event) => this.onChangeInput(
                            'backgroundColor',event.target.value
                        ) } 
                    />
                </div>
                <div className="col-md-12">
                <p>Padding</p>
                 <div className="row">
                 <div className="col-md-3 form-group">
                    <Label>Top</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingTop} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingTop",Number(event.target.value)
                        ) }
                    />
                    </div>
                    <div className="col-md-3 form-group">
                    <Label>Bottom</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingBottom} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingBottom",Number(event.target.value)
                        ) }
                    />
                    </div>
                    <div className="col-md-3 form-group">
                    <Label>Left</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingLeft} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingLeft",Number(event.target.value)
                        ) }
                    />
                    </div>
                    <div className="col-md-3 form-group">
                    <Label>Right</Label>
                    <Input type="number" 
                        value={this.state.styles.paddingRight} 
                        onChange = { (event) => this.onChangeInput(
                            "paddingRight",Number(event.target.value)
                        ) }
                    />
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

export default connect(mapStateToProps, {
    edit_layout_styles
})(Styles_layout);