// edit menu for layouts

import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_layout, delete_layout, duplicate_layout 
} from '../../actions/edit_actions';

import Styles_layout from '../styles_component/styles_layout';

class Edit_Layout extends Component 
{
    render() 
    {
        return (
            <div>
                <div className="col-md-12 mt-3 btnSection">
                   <div className="row">
                     <div className="col-sm-4">
                            <Button color="primary" 
                                onClick={ () => {
                                    // call action to duplicate
                                    this.props.duplicate_layout(this.props.data.id);
                                    this.props.update();
                                } } className="btn-sm btn-block"
                            >DUPLICATE</Button>
                        </div>
                         <div className="col-sm-4">
                            <Button color="success" 
                                onClick={ () => this.props.edit_layout() } className="btn-sm btn-block"
                            >DONE</Button>
                        </div>
                        <div className="col-sm-4">
                            <Button color="danger" 
                                onClick={ () => {
                                    // call action to delete
                                    this.props.delete_layout(this.props.data.id);
                                    this.props.edit_layout();
                                }} className="btn-sm btn-block"
                            >DELETE</Button>
                        </div>
                    </div>
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
    delete_layout,
    duplicate_layout
})(Edit_Layout);
