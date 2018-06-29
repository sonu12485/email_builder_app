import React, { Component } from 'react';

import { Button, Input, Label } from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_btn, edit_btn_data, delete_item, edit_layout
} from '../../actions/edit_actions';

class Edit_btn extends Component 
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

        const data = selectedItem.data;

        this.state={
            data
        }
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_btn();
    }

    onChangeInput = (key,val) =>
    {
        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data,
                    [key]: val
                }
            }
        },
        () => {
            this.props.edit_btn_data(
                this.props.data.id,
                this.state.data,
                this.props.data.layout_id,
                this.props.data.position
            );
            this.props.update();
        }
        );
    }

    onChangePadding = (key,val) =>
    {
        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data,
                    style: {
                        ...prevState.data.style,
                        [key]: val
                    }
                }
            }
        },
        () => {
            this.props.edit_btn_data(
                this.props.data.id,
                this.state.data,
                this.props.data.layout_id,
                this.props.data.position
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
                        onClick={ () => this.props.edit_btn() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => this.deleteElement() }
                    >DELETE</Button>
                </div>

                <br />

                <div className="style_inputs" >

                    <div>
                        <Label>Enter Button Name</Label>
                        <Input
                            value={this.state.data.name} 
                            onChange = { (event) => {this.onChangeInput(
                                "name",event.target.value
                            )} }
                        />
                    </div>

                    <div>
                        <br />
                        <Label>Enter Button URL</Label>
                        <Input
                            value={this.state.data.url} 
                            onChange = { (event) => {this.onChangeInput(
                                "url",event.target.value
                            )} }
                        />
                    </div>

                    <div>
                        <br />
                        <Label>Open URL in</Label>
                        <Input type="select" 
                            value={this.state.data.target} 
                            onChange = { (event) => {this.onChangeInput(
                                "target",event.target.value
                            )} }
                        >
                            <option value={''} >Same Tab</option>
                            <option value={'_blank'} >A New Tab</option>
                            
                        </Input>
                    </div>

                    <div>
                        <br />
                        <Label>Select Button Style</Label>
                        <Input type="select" 
                            value={this.state.data.color} 
                            onChange = { (event) => {this.onChangeInput(
                                "color",event.target.value
                            )} }
                        >
                            <option value={'primary'} >primary</option>
                            <option value={'success'} >success</option>
                            <option value={'info'} >info</option>
                            <option value={'warning'} >warning</option>
                            <option value={'danger'} >danger</option>
                            <option value={'link'} >link</option>
                            
                        </Input>
                    </div>

                    <div>
                        <br />
                        <Label>Select Button Size</Label>
                        <Input type="select" 
                            value={this.state.data.size} 
                            onChange = { (event) => {this.onChangeInput(
                                "size",event.target.value
                            )} }
                        >
                            <option value={''} >Default</option>
                            <option value={'sm'} >Small</option>
                            <option value={'lg'} >Large</option>
                            
                        </Input>
                    </div>

                    <div>
                        <br />
                        <Label>Select for Block Button</Label>
                        <Input type="select" 
                            value={this.state.data.block} 
                            onChange = { (event) => {this.onChangeInput(
                                "block",(event.target.value === 'true')
                            )} }
                        >
                            <option value={false} >Default</option>
                            <option value={true} >Block Button</option>
                            
                        </Input>
                    </div>

                    <div>
                        <br />
                        <Label>Select Button Alignment</Label>
                        <Input type="select" 
                            value={this.state.data.alignment} 
                            onChange = { (event) => {this.onChangeInput(
                                "alignment",event.target.value
                            )} }
                        >
                            <option value={"left"} >Left</option>
                            <option value={"center"} >Center</option>
                            <option value={"right"} >Right</option>
                            
                        </Input>
                    </div>

                    <div>
                    <br />

                    <Label>Select Top Padding</Label>
                    <Input type="number" 
                        value={this.state.data.style.paddingTop} 
                        onChange = { (event) => this.onChangePadding(
                            "paddingTop",Number(event.target.value)
                        ) }
                    />

                    <Label>Select Bottom Padding</Label>
                    <Input type="number" 
                        value={this.state.data.style.paddingBottom} 
                        onChange = { (event) => this.onChangePadding(
                            "paddingBottom",Number(event.target.value)
                        ) }
                    />

                    <Label>Select Left Padding</Label>
                    <Input type="number" 
                        value={this.state.data.style.paddingLeft} 
                        onChange = { (event) => this.onChangePadding(
                            "paddingLeft",Number(event.target.value)
                        ) }
                    />

                    <Label>Select Right Padding</Label>
                    <Input type="number" 
                        value={this.state.data.style.paddingRight} 
                        onChange = { (event) => this.onChangePadding(
                            "paddingRight",Number(event.target.value)
                        ) }
                    />

                </div>

                </div>

                <br />
                <br />
                <br />

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.btn_edit,
        items: state.items,
        is_layout_edit: state.layout_edit.val
    }
}

export default connect(mapStateToProps, {
    edit_btn,
    edit_btn_data,
    delete_item,
    edit_layout
})(Edit_btn);
