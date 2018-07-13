// edit menu for HTML component

import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_HTML, edit_HTML_data, delete_item, edit_layout, duplicate_item
} from '../../actions/edit_actions';

class Edit_HTML extends Component 
{
    constructor(props)
    {
        super(props);

        if(this.props.is_layout_edit)
        {
            this.props.edit_layout();
        }

        // extract the data of HTML component to be edited and store it in states
        let x;
        const selectedItemArray = this.props.items.map( item => {
            if(item.id === this.props.data.layout_id)
            {
                if(this.props.data.position === 'left')
                {
                    x = item.left.find( component => {
                        return component.id === this.props.data.id
                    });
                    return x;
                }
                else if(this.props.data.position === 'right')
                {
                    x = item.right.find( component => {
                        return component.id === this.props.data.id
                    });
                    return x;
                }
                else if(this.props.data.position === 'center')
                {
                    x = item.center.find( component => {
                        return component.id === this.props.data.id
                    });
                    return x;
                }
            }
        });

        const selectedItem = selectedItemArray.find( item => {
            return item
        });

        const data = selectedItem.html;

        this.state={
            data
        }
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        // call action to delete
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_HTML();
    }

    onInputChange = (event) => 
    {
        const { id, layout_id, position } = this.props.data;

        this.setState({
            data: event.target.value
        },
        // call action that edits data
        () => {
            this.props.edit_HTML_data(
                id,
                this.state.data,
                layout_id,
                position
            );
            // update action call for live reload
            this.props.update();
        }
        );
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
                
                <div className="col-md-12 mt-3 btnSection" >
                 <div className="row">
                     <div className="col-sm-4">
                        <Button color="primary" 
                            onClick={ () => this.onItemDuplicate() } className="btn-sm btn-block"
                        >DUPLICATE</Button>
                    </div>
                     <div className="col-sm-4">
                        <Button color="success" 
                            onClick={ () => this.props.edit_HTML() } className="btn-sm btn-block"
                        >DONE</Button>
                        </div>
                         <div className="col-sm-4">
                        <Button color="danger" 
                            onClick={ () => this.deleteElement() } className="btn-sm btn-block"
                        >DELETE</Button>
                        </div>
                   </div>
                </div>

                <div className="editor" >
                    <Input type="textarea" 
                        style={{height: 400}}
                        value={this.state.data} 
                        onChange = { (event) => this.onInputChange(event) }
                    />
                </div>

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.html_edit,
        items: state.items,
        is_layout_edit: state.layout_edit.val
    }
}

export default connect(mapStateToProps, {
    edit_HTML,
    edit_HTML_data,
    delete_item,
    edit_layout,
    duplicate_item
})(Edit_HTML);
