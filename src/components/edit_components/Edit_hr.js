import React, { Component } from 'react';

import { Button } from 'reactstrap';

import { connect } from 'react-redux';

import { edit_hr, delete_item } from '../../actions/edit_actions';

class Edit_hr extends Component 
{
    deleteElement = () =>
    {
        const id = this.props.data.id;
        
        this.props.delete_item(id);
        this.props.update();
        this.props.edit_hr();
    }

    render() 
    {
        return (
            <div>

                <div className="btn_container" >
                    <Button color="primary" 
                        onClick={ () => this.props.edit_hr() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => this.deleteElement() }
                    >DELETE</Button>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.hr_edit
    }
}

export default connect(mapStateToProps, {
    edit_hr,
    delete_item
})(Edit_hr);