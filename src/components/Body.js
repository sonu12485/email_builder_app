import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Button, Label, Input } from 'reactstrap';

import { 
    edit_body_width, edit_body_background, edit_body_padding 
} from '../actions/edit_actions';

class Body extends Component 
{
    render() 
    {
        return (
            <div className="style_inputs" >
                
                <div>
                    <Label>Select Page Width</Label>
                    <Input type="select" 
                        value={this.props.body.width}
                        onChange = { (event) => {
                            this.props.edit_body_width(Number(event.target.value));
                        } }
                    >
                        <option value={300} >300px</option>
                        <option value={350} >350px</option>
                        <option value={400} >400px</option>
                        <option value={450} >450px</option>
                        <option value={500} >500px</option>
                        <option value={550} >550px</option>
                        <option value={600} >600px</option>
                        <option value={650} >650px</option>
                        <option value={700} >700px</option>
                        <option value={750} >750px</option>
                        <option value={800} >800px</option>
                        <option value={850} >850px</option>
                        <option value={900} >900px</option>
                        <option value={950} >950px</option>
                        <option value={1000} >1000px</option>
                        
                    </Input>
                </div>

                <div>
                    <br />
                    <Label>Select Background Color</Label>
                    <Input type="color" style={{height: 40}}
                        value={this.props.body.background}
                        onChange = { (event) => {
                            this.props.edit_body_background(event.target.value);
                        } } 
                    />
                </div>

                <div>
                    <br />

                    <Label>Select Top Padding</Label>
                    <Input type="number" 
                        value={this.props.body.paddingTop} 
                        onChange = { (event) => {
                            this.props.edit_body_padding({
                                width: this.props.body.width,
                                background : this.props.body.background,
                                paddingTop: Number(event.target.value),
                                paddingBottom: this.props.body.paddingBottom,
                                paddingLeft: this.props.body.paddingLeft,
                                paddingRight: this.props.body.paddingRight
                            });
                        } }
                    />

                    <Label>Select Bottom Padding</Label>
                    <Input type="number" 
                        value={this.props.body.paddingBottom} 
                        onChange = { (event) => {
                            this.props.edit_body_padding({
                                width: this.props.body.width,
                                background : this.props.body.background,
                                paddingTop: this.props.body.paddingTop,
                                paddingBottom: Number(event.target.value),
                                paddingLeft: this.props.body.paddingLeft,
                                paddingRight: this.props.body.paddingRight
                            });
                        } }
                    />

                    <Label>Select Left Padding</Label>
                    <Input type="number" 
                        value={this.props.body.paddingLeft} 
                        onChange = { (event) => {
                            this.props.edit_body_padding({
                                width: this.props.body.width,
                                background : this.props.body.background,
                                paddingTop: this.props.body.paddingTop,
                                paddingBottom: this.props.body.paddingBottom,
                                paddingLeft: Number(event.target.value),
                                paddingRight: this.props.body.paddingRight
                            });
                        } }
                    />

                    <Label>Select Right Padding</Label>
                    <Input type="number" 
                        value={this.props.body.paddingRight} 
                        onChange = { (event) => {
                            this.props.edit_body_padding({
                                width: this.props.body.width,
                                background : this.props.body.background,
                                paddingTop: this.props.body.paddingTop,
                                paddingBottom: this.props.body.paddingBottom,
                                paddingLeft: this.props.body.paddingLeft,
                                paddingRight: Number(event.target.value)
                            });
                        } }
                    />

                </div>

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        body: state.body
    }
}

export default connect(mapStateToProps, {
    edit_body_width,
    edit_body_background,
    edit_body_padding
})(Body);
