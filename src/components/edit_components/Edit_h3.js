import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';

import { connect } from 'react-redux';

import { edit_h3, edit_h3_data, delete_item } from '../../actions/edit_actions';

import StyleEditor from '../styles_component/styles_text';
import MoveManager from '../move_components/move_handler';

class Edit_h3 extends Component 
{
    constructor(props)
    {
        super(props);

        const selectedItem = this.props.items.find( item => {
            return item.id === this.props.data.id
        });

        const data = selectedItem.data;

        this.state={
            data
        }
    }

    deleteElement = () =>
    {
        const id = this.props.data.id;
        
        this.props.delete_item(id);
        this.props.update();
        this.props.edit_h3();
    }

    onInputChange = (event) => 
    {
        this.setState({
            data: event.target.value
        },
        () => {
            this.props.edit_h3_data(
                this.props.data.id,
                this.state.data
            );
            this.props.update();
        }
        );
    }

    render() 
    {
        return (
            <div>

                <MoveManager 
                    id={this.props.data.id} 
                    update={this.props.update}
                />

                <div className="editor" >
                    <Input type="textarea" 
                        value={this.state.data} 
                        onChange = { (event) => this.onInputChange(event) }
                    />
                </div>

                <div>
                    <StyleEditor 
                        id={this.props.data.id} 
                        update={this.props.update}
                    />
                </div>

                <div className="btn_container" >
                    <Button color="primary" 
                        onClick={ () => this.props.edit_h3() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => this.deleteElement() }
                    >DELETE</Button>
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
        data: state.h3_edit,
        items: state.items
    }
}

export default connect(mapStateToProps, {
    edit_h3,
    edit_h3_data,
    delete_item
})(Edit_h3);