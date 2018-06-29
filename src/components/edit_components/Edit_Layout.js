import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';

import { connect } from 'react-redux';

import { edit_layout, delete_layout } from '../../actions/edit_actions';

import Styles_layout from '../styles_component/styles_layout';

class Edit_Layout extends Component 
{
    render() 
    {
        return (
            <div>

                <div className="btn_container" >
                    <Button color="primary" 
                        onClick={ () => this.props.edit_layout() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => {
                            this.props.delete_layout(this.props.data.id);
                            this.props.edit_layout();
                        }}
                    >DELETE</Button>
                </div>

                <div>
                        <Styles_layout 
                            id={this.props.data.id}
                            update={this.props.update}
                        />
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.layout_edit
    }
}

export default connect(mapStateToProps, {
    edit_layout,
    delete_layout
})(Edit_Layout);
