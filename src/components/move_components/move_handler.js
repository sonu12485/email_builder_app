import React, { Component } from 'react';

import * as FA from 'react-icons/lib/fa';

import { connect } from 'react-redux';

import {  slide_item_up, slide_item_down } from '../../actions/edit_actions';

class move_handler extends Component 
{
    render() 
    {
        return (
            <div>
                <div className="btn_container" >
                    <FA.FaArrowUp size={50} color={"#345F90"}
                        onClick={ () => {
                            this.props.slide_item_up(this.props.id);
                            this.props.update();
                        }}
                    />
                    <FA.FaArrowDown size={50} color={"#345F90"}
                        onClick={ () => {
                            this.props.slide_item_down(this.props.id);
                            this.props.update();
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default connect(null, { 
    slide_item_up,
    slide_item_down 
})(move_handler);
