import React, { Component } from 'react';

import { 
    Button, InputGroup, InputGroupAddon, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_img, delete_item, edit_img_src, edit_layout, edit_img_link
 } from '../../actions/edit_actions';

class Edit_img extends Component 
{
    constructor(props)
    {
        super(props);

        if(this.props.is_layout_edit)
        {
            this.props.edit_layout();
        }

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

        const data = selectedItem;

        this.state={
            img_src: null,
            data
        }
        console.log(this.state.data);
    }

    onSrcChange = (event) =>
    {
        this.setState({
            img_src: event.target.value
        });
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_img();
    }

    submitImgSrc = () =>
    {
        const { id, layout_id, position } = this.props.data;

        this.props.edit_img_src(
            id,
            this.state.img_src,
            layout_id,
            position
        );
        this.props.update();
    }

    onLinkChange = (val) =>
    {
        const { id, layout_id, position } = this.props.data;

        this.setState(prevState => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    link: val
                }
            }
        },
        () => {
            this.props.edit_img_link(
                id,
                this.state.data.link,
                layout_id,
                position
            );
            this.props.update();
        }
        );
    }

    render() 
    {
        return (
            <div>

                <div className="btn_container" >
                    <Button color="primary" 
                        onClick={ () => this.props.edit_img() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => this.deleteElement() }
                    >DELETE</Button>
                </div>
                
                <div>
                    <div className="img_input_conatiner" >
                    <InputGroup>
                        <Input placeholder="Enter Image URL" 
                            onChange={ (event) => { this.onSrcChange(event) }}
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" 
                                onClick={ () => this.submitImgSrc()}
                            >SUBMIT</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </div>
                </div>

                <div>
                    <h4 style={{textAlign: "center", marginTop: 40}} >OR</h4>
                </div>

                <div className="image_drop_conatiner" >
                <div className="image_drop" >
                    <h5>Drop an Image Here.</h5>
                </div>
                </div>

                <div>
                    <div className="img_input_conatiner" >
                        <Label>
                            Enter Image Link, if any 
                        </Label>
                        <Input 
                            value={this.state.data.link}
                            onChange={ (event) => this.onLinkChange(
                                event.target.value.toString()
                            ) }
                        />
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.img_edit,
        items: state.items,
        is_layout_edit: state.layout_edit.val
    }
}

export default connect(mapStateToProps, {
    edit_img,
    delete_item,
    edit_img_src,
    edit_layout,
    edit_img_link
})(Edit_img);
