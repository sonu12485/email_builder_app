import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import * as FA from 'react-icons/lib/fa';

import { Button } from 'reactstrap';

import checkToken from '../functions/checkToken';
import logout from '../functions/logout';

class Home extends Component 
{
    componentDidMount()
    {
        if( !checkToken() )
        {
            //this.props.history.push('/');
        }
    }

    render() 
    {
        return (
            <div>
                <div className="header_home" >
                    <div>
                        <h1 style={{textAlign: 'center'}} >Home</h1>
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
            </div>
        );
    }
}

export default withRouter(Home);
