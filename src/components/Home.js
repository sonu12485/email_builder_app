// Home page of the app

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import * as FA from 'react-icons/lib/fa';

import { Button } from 'reactstrap';

import { getTemplates, deleteTemplate } from '../actions/template_actions';

import { assign_template, assign_template_body } from '../actions/edit_actions';

import checkToken from '../functions/checkToken';
import logout from '../functions/logout';

class Home extends Component 
{
    componentDidMount()
    {
        // checks if user logged in or not
        if( !checkToken() )
        {
            this.props.history.push('/');
        }
        this.props.getTemplates();
    }

    renderDeleteBtn = (flag,name) =>
    {
        if(flag)
        {
            return <div></div>
        }
        else
        {
            return (
                <Button color="danger"
                    // call action to delete template
                    onClick = { () => this.props.deleteTemplate(
                        name
                    ) }
                >DELETE</Button>
            );
        }
    }

    // renders all templates of a user
    renderTemplates = () => 
    {
        if(this.props.templates)
        {
            return this.props.templates.map( template => {
                return (
                    <div>
                        <div className="new" 
                            onClick = { () => {
                                this.props.assign_template(
                                    JSON.parse(template.data)
                                );
                                this.props.assign_template_body(
                                    JSON.parse(template.body)
                                );
                                this.props.history.push('/new');
                            } }
                        >
                            <div
                                style={{ color: "#345F90", margin: 5, fontSize: 24 }}
                            >{template.name}</div>
                        </div>

                        <div className="btn_container" >
                            {this.renderDeleteBtn(template.default, template.name)}
                        </div>
                    </div>
                );
            });
        }
        else
        {
            return <div></div>
        }
    }

    // initializes empty document/email
    initEmptyEmail = () =>
    {
        const initBody = {
            width: 600,
            background: '#ffffff',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0 
        };
        this.props.assign_template([]);
        this.props.assign_template_body( initBody );
        this.props.history.push('/new');
    }

    render() 
    {
        return (
            <div>
                <div className="header_home" >
                    <div>
                        <h1>Home</h1>
                    </div>
                    <div>
                        <Button color="primary"
                            onClick = { () => logout() }
                        >LOGOUT</Button>
                    </div>
                </div>

                <div>
                    <div className="home_text" >   
                        Create a new Email -
                    </div>
                </div>

                <div style={{paddingLeft: 50}} >
                    <div className="new" 
                        onClick = { () => {
                            this.initEmptyEmail()
                        }}
                    >
                        <FA.FaPlus size={50} 
                            color="#345F90" 
                            style={{margin: 5}}                              
                        />
                    </div>
                </div>

                <div>
                    <div className="home_text" >   
                        Saved Templates -
                    </div>
                </div>

                <div className="templates_container" >
                    {this.renderTemplates()}
                </div>
                <br />
                <br />
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        templates: state.templates
    }
}

export default withRouter(connect(mapStateToProps, {
    getTemplates,
    assign_template,
    deleteTemplate,
    assign_template_body
})(Home));
