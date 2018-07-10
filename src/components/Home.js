import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import * as FA from 'react-icons/lib/fa';

import { Button } from 'reactstrap';

import { getTemplates, deleteTemplate } from '../actions/template_actions';

import { assign_template } from '../actions/edit_actions';

import checkToken from '../functions/checkToken';
import logout from '../functions/logout';

class Home extends Component 
{
    componentDidMount()
    {
        if( !checkToken() )
        {
            this.props.history.push('/');
        }
        this.props.getTemplates();
    }

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
                                this.props.history.push('/new');
                            } }
                        >
                            <div
                                style={{ color: "#345F90", margin: 5, fontSize: 24 }}
                            >{template.name}</div>
                        </div>

                        <div className="btn_container" >
                            <Button color="danger"
                                onClick = { () => this.props.deleteTemplate(
                                    template.name
                                ) }
                            >DELETE</Button>
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
                        onClick = { () => this.props.history.push('/new')}
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
    deleteTemplate
})(Home));
