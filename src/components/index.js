import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Button } from 'reactstrap';

import checkToken from '../functions/checkToken';

class Index extends Component 
{
    componentDidMount()
    {
        if( checkToken() )
        {
            this.props.history.push('/home');
        }
    }

    render() 
    {
        return (
            <div className="index" >
                <h1>Email Builder</h1>
                <div className="btn_container" >
                    <Button color="primary" className="btn"
                        onClick={ () => this.props.history.push('/login') } 
                    >
                        LOGIN
                    </Button>
                    <Button color="primary" className="btn"
                        onClick={ () => this.props.history.push('/register') }
                    >
                        REGISTER
                    </Button>
                </div>
                <br />
                <img src="img/index_img.png" 
                    className="img-fluid mx-auto d-block" 
                />
            </div>
        );
    }
}

export default withRouter(Index);
