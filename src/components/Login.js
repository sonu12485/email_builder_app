// login page of the app

import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Button, Input, Label, Form } from 'reactstrap';

import { connect } from 'react-redux';

import { login } from '../actions/auth_actions';

import { update } from '../actions/index';

import checkToken from '../functions/checkToken';

class Login extends Component 
{   
    constructor(props)
    {
        super(props);

        this.state = {
            email: '',
            password: ''
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
        // call action to login
        this.props.login(
            this.state.email,
            this.state.password
        );
    }

    render() 
    {
        return (
            <div className="background" >
                <div className="input_box" >
                <Form onSubmit = { (event) => this.onFormSubmit(event) } >
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
                            LOGIN
                        </Button>
                    </div>
                </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {
    login,
    update
})(Login));

