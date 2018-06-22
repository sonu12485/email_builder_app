import React, { Component } from 'react';
import SplitterLayout from 'react-splitter-layout';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { connect } from 'react-redux';

import Items from './Items';
import Layouts from './Layouts';
import Preview from './Preview';
import Edit_h1 from './edit_components/Edit_h1';
import Edit_h3 from './edit_components/Edit_h3';
import Edit_hr from './edit_components/Edit_hr';
import Edit_p from './edit_components/Edit_p';
import Edit_img from './edit_components/Edit_img';

import { update as update_action } from '../actions/index';

class App extends Component 
{
  constructor(props)
  {
    super(props);

    this.state={
      tabs_flag: true
    }
  }

  update = () =>
  {
    this.props.update_action();
  }

  renderSideBar = () =>
  {
    if(this.props.is_h1_edit)
    {
      return <Edit_h1 update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_h3_edit)
    {
      return <Edit_h3 update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_hr_edit)
    {
      return <Edit_hr update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_p_edit)
    {
      return <Edit_p update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_img_edit)
    {
      return <Edit_img update ={ () => {
        this.update()
      } } />
    }
    else
    {
      return this.renderMenu()
    }
  }

  renderItemsOrLayouts = () => 
  {
    if(this.state.tabs_flag)
    {
      return <Items />
    }
    else
    {
      return <Layouts />
    }
  }

  renderMenu = () =>
  {
    if(this.state.tabs_flag)
    {
      return (
        <div>
        <div className="tabs_container" >
        <div className="tabs" >
          <div className="tab active" >
            <div>Components</div>
          </div>
          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: false
              })
            }}
          >
            <div>Layouts</div>
          </div>
        </div>
        </div>
          {this.renderItemsOrLayouts()}
        </div>
      );
    }
    else
    {
      return (
        <div>
        <div className="tabs_container" >
        <div className="tabs" >
          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: true
              })
            }}
          >
            <div>Components</div>
          </div>
          <div className="tab active" >
            <div>Layouts</div>
          </div>
        </div>
        </div>
          {this.renderItemsOrLayouts()}
        </div>
      );  
    }
  }

  render() {
    return (
      <div className="conatiner" >
      <SplitterLayout
        percentage={true}
        secondaryInitialSize={65}
        primaryMinSize={25}
        secondaryMinSize={60}
      >
        <div>
          {this.renderSideBar()}
        </div>
        <div>
          <Preview />
        </div>
      </SplitterLayout>
      </div>
    );
  }
}

function mapStateToProps(state)
{
  return {
    is_h1_edit: state.h1_edit.val,
    is_h3_edit: state.h3_edit.val,
    is_hr_edit: state.hr_edit.val,
    is_p_edit: state.p_edit.val,
    is_img_edit: state.img_edit.val
  }
}

export default connect(mapStateToProps, {
  update_action
})(DragDropContext(HTML5Backend)(App));
