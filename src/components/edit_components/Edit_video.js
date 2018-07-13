// edit menu for videos

import React, { Component } from 'react';

import { 
    Button, InputGroup, InputGroupAddon, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_video, delete_item, edit_layout, duplicate_item, edit_video_url
} from '../../actions/edit_actions';

class Edit_video extends Component 
{
    constructor(props)
    {
        super(props);

        if(this.props.is_layout_edit)
        {
            this.props.edit_layout();
        }

        this.state = {
            url: ''
        }
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        // call action to delete
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_video();
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

    onURLChange = (event) =>
    {
        this.setState({
            url: event.target.value
        });
    }

    submitURL = () =>
    {
        const { id, layout_id, position } = this.props.data;

        // call action that edits video url
        this.props.edit_video_url(
            id,
            layout_id,
            position,
            {
                url: this.state.url
            }
        );
        // update action call for live reload
        this.props.update();
    }
    
    render() 
    {
        return (
            <div>
                
                <div className="col-md-12 mt-3 btnSection">
                   <div className="row">
                     <div className="col-sm-4">
                        <Button color="primary" 
                            onClick={ () => this.onItemDuplicate() } className="btn-sm btn-block"
                        >DUPLICATE</Button>
                     </div>
                      <div className="col-sm-4">
                        <Button color="success" 
                            onClick={ () => this.props.edit_video() } className="btn-sm btn-block"
                        >DONE</Button>
                      </div>
                      <div className="col-sm-4">
                        <Button color="danger" 
                            onClick={ () => this.deleteElement() } className="btn-sm btn-block"
                        >DELETE</Button>
                      </div>
                    </div>
                </div>

                <div>
                    <div className="img_input_conatiner" >
                    <InputGroup>
                        <Input placeholder="Enter Youtube Video Embed URL" 
                            onChange={ (event) => { this.onURLChange(event) }}
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" 
                                onClick={ () => this.submitURL()}
                            >SUBMIT</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.video_edit,
        items: state.items,
        is_layout_edit: state.layout_edit.val
    }
}

export default connect(mapStateToProps, {
    edit_video,
    delete_item,
    edit_layout,
    duplicate_item,
    edit_video_url
})(Edit_video);
