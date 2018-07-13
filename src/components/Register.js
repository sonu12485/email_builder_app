// register page of the app

import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Button, Input, Label, Form } from 'reactstrap';

import { connect } from 'react-redux';

import { register } from '../actions/auth_actions';

import checkToken from '../functions/checkToken';

class Register extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: '',
            username: ''
        }
    }

    componentDidMount()
    {
        // checks if user logged in or not
        if( checkToken() )
        {
            this.props.history.push('/home');
        }
    }

    onInputChange = (key, val) =>
    {
        this.setState(prevState => {
            return {
                ...prevState,
                [key] : val
            }
        });
    }

    onFormSubmit = (event) =>
    {
        event.preventDefault();
        console.log(this.state);
        // call action to register
        this.props.register(
            this.state.username,
            this.state.email,
            this.state.password
        );
        this.props.history.push('/');
    }

    render() 
    {
        return (
            <div className="background" >
                <div className="input_box" >
                <Form onSubmit = { (event) => this.onFormSubmit(event) } >
                    <Label>Name</Label>
                    <Input
                        value={this.state.username} 
                        onChange = { (event) => this.onInputChange("username",event.target.value) }
                    />
                    <br />
                    <Label>Email</Label>
                    <Input type="email"
                        value={this.state.email} 
                        onChange = { (event) => this.onInputChange("email",event.target.value) }
                    />
                    <br />
                    <Label>Password</Label>
                    <Input type="password"
                        value={this.state.password} 
                        onChange = { (event) => this.onInputChange("password",event.target.value) }
                    />
                    <div className="btn_container" >
                        <Button color="primary" type="submit" >
                            REGISTER
                        </Button>
                    </div>
                </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {
    register
})(Register));