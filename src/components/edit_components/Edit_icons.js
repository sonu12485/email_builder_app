import React, { Component } from 'react';

import { 
    Button, Input, Label
} from 'reactstrap';

import { connect } from 'react-redux';

import { 
    edit_icons, edit_icons_data, delete_item, edit_layout, duplicate_item
} from '../../actions/edit_actions';

class Edit_icons extends Component 
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

        console.log(this.state.data);
    }

    deleteElement = () =>
    {
        const { id, layout_id, position } = this.props.data;
        
        this.props.delete_item(id,layout_id,position);
        this.props.update();
        this.props.edit_icons();
    }

    onIconUncheck = (iconUnchecked) =>
    {
        const { id, layout_id, position } = this.props.data;

        const newIcons = this.state.data.icons.filter( icon => {
            return icon !== iconUnchecked
        });

        const newIconsLeft = this.state.data.iconsLeft.concat([iconUnchecked]);

        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data,
                    icons: newIcons,
                    iconsLeft: newIconsLeft
                }
            }
        },
        () => {
            this.props.edit_icons_data(
                id,
                this.state.data,
                layout_id,
                position
            );
            this.props.update();
        }
        )
    }

    onIconCheck = (iconChecked) =>
    {
        const { id, layout_id, position } = this.props.data;

        const newIconsLeft = this.state.data.iconsLeft.filter( icon => {
            return icon !== iconChecked
        });

        const newIcons = this.state.data.icons.concat([iconChecked]);

        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data,
                    icons: newIcons,
                    iconsLeft: newIconsLeft
                }
            }
        },
        () => {
            this.props.edit_icons_data(
                id,
                this.state.data,
                layout_id,
                position
            );
            this.props.update();
        }
        )
    }

    onChangeInput = (key,val) =>
    {
        const { id, layout_id, position } = this.props.data;

        this.setState(prevState => {
            return {
                data: {
                    ...prevState.data,
                    [key]: val
                }
            }
        },
        () => {
            this.props.edit_icons_data(
                id,
                this.state.data,
                layout_id,
                position
            );
            this.props.update();
        }
        )
    }

    renderIcons = () => 
    {
        return (
            <div className="editor_icons" >

                {this.state.data.icons.map( icon => {
                    return (
                        <div key={icon} >
                            <Label check>
                                <Input type="checkbox" 
                                    onChange = { () => this.onIconUncheck(icon) }
                                    checked
                                />{' '}
                                {icon}
                            </Label>
                            <br />
                        </div>
                    )
                })}
            
                {this.state.data.iconsLeft.map( icon => {
                    return (
                        <div key={icon} >
                            <Label check>
                                <Input type="checkbox" 
                                    onChange = { () => this.onIconCheck(icon) }
                                />{' '}
                                {icon}
                            </Label>
                            <br />
                        </div>
                    )
                })}

            </div>
        );
    }

    renderColorSelector = () =>
    {
        if(this.state.data.color === 'default')
        {
            return <div></div>
        }
        else
        {
            return (
                <div>
                    <br />
                    <Label>Select Icon Color</Label>
                    <Input type="color" style={{height: 40}}
                        value={this.state.data.colorValue}
                        onChange = { (event) => this.onChangeInput(
                            'colorValue',
                            event.target.value.toString()
                        ) } 
                    />
                </div>
            );
        }
    }

    onChangeInputURL = (key,val) => 
    {
        const { id, layout_id, position } = this.props.data;
        
                this.setState(prevState => {
                    return {
                        data: {
                            ...prevState.data,
                            link: {
                                ...prevState.data.link,
                                [key]: val
                            }
                        }
                    }
                },
                () => {
                    this.props.edit_icons_data(
                        id,
                        this.state.data,
                        layout_id,
                        position
                    );
                    this.props.update();
                }
                )
    }

    renderURLInputs = () =>
    {
        return this.state.data.icons.map( icon => {
            return (
                <div key={icon} >
                    <Label>Enter Your {icon} URL</Label>
                    <Input value={this.state.data.link[icon]}
                        onChange={ (event) => this.onChangeInputURL(
                            icon,
                            event.target.value.toString()
                        ) }
                    />
                    <br />
                </div>
            );
        });
    }

    onItemDuplicate = () =>
    {
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
                
                <div className="btn_container" >
                    <Button color="primary" 
                        onClick={ () => this.onItemDuplicate() }
                    >DUPLICATE</Button>
                    <Button color="primary" 
                        onClick={ () => this.props.edit_icons() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => this.deleteElement() }
                    >DELETE</Button>
                </div>   

                {this.renderIcons()}    

                <div className="style_inputs" >

                <div>
                    <Label>Select Icon Color</Label>
                    <Input type="select" 
                        value={this.state.data.color} 
                        onChange = { (event) => {this.onChangeInput(
                            "color",
                            event.target.value.toString()
                        )} }
                    >

                        <option value={'default'} >Default</option>
                        <option value={'custom'} >Custom</option>

                    </Input>
                </div>

                {this.renderColorSelector()}

                <div>
                    <br />
                    <Label>Select Icon Size</Label>
                    <Input type="select" 
                        value={this.state.data.size} 
                        onChange = { (event) => {this.onChangeInput(
                            "size",
                            event.target.value.toString()
                        )} }
                    >

                        <option value={'small'} >Small</option>
                        <option value={'default'} >Default</option>
                        <option value={'large'} >Large</option>

                    </Input>
                </div>

                <div>
                    <br />
                    <Label>Select Icon Layout</Label>
                    <Input type="select" 
                        value={this.state.data.layout} 
                        onChange = { (event) => {this.onChangeInput(
                            "layout",
                            event.target.value.toString()
                        )} }
                    >

                        <option value={'row'} >Row</option>
                        <option value={'column'} >Column</option>

                    </Input>
                </div>

                <div>
                    <br />
                    <Label>Select Icon Alignment</Label>
                    <Input type="select" 
                        value={this.state.data.alignment} 
                        onChange = { (event) => {this.onChangeInput(
                            "alignment",
                            event.target.value.toString()
                        )} }
                    >

                        <option value={'left'} >Left</option>
                        <option value={'center'} >Center</option>
                        <option value={'right'} >Right</option>

                    </Input>
                </div>

                </div>    

                <div className="editor" >
                    {this.renderURLInputs()}
                </div>     

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.icon_edit,
        items: state.items,
        is_layout_edit: state.layout_edit.val
    }
}

export default connect(mapStateToProps, {
    edit_icons,
    edit_icons_data,
    delete_item,
    edit_layout,
    duplicate_item
})(Edit_icons);
