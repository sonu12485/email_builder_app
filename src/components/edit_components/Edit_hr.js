// edit menu for HR

import React, { Component } from 'react';

import { Button } from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_hr, delete_item, edit_layout, duplicate_item 
} from '../../actions/edit_actions';

class Edit_hr extends Component 
{
    constructor(props)
    {
        super(props);

        if(this.props.is_layout_edit)
        {
            this.props.edit_layout();
        }
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        // call action to delete
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_hr();
    }

    onItemDuplicate = () =>
    {
        // call action to duplicate
        this.props.duplicate_item(
            this.props.data.id,
            this.props.data.layout_id,
            this.props.data.position
        );
        this.props.update();
    }

    render() 
    {
        return (
            <div>

              <div className="col-md-12 mt-3 mb-3 btnSection">
                   <div className="row">
                     <div className="col-sm-4">
                        <Button color="primary" 
                            onClick={ () => this.onItemDuplicate() } className="btn-sm btn-block"
                        >DUPLICATE</Button>
                      </div>
                       <div className="col-sm-4">
                            <Button color="success" 
                                onClick={ () => this.props.edit_hr() } className="btn-sm btn-block"
                            >DONE</Button>
                        </div>
                         <div className="col-sm-4">
                            <Button color="danger" 
                                onClick={ () => this.deleteElement() } className="btn-sm btn-block"
                            >DELETE</Button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.hr_edit,
        is_layout_edit: state.layout_edit.val
    }
}

export default connect(mapStateToProps, {
    edit_hr,
    delete_item,
    edit_layout,
    duplicate_item
})(Edit_hr);