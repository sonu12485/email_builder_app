import React, { Component } from 'react';
import SplitterLayout from 'react-splitter-layout';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import { connect } from 'react-redux';

import Items from './Items';
import Layouts from './Layouts';
import Body from './Body';
import Preview from './Preview';
import Edit_h1 from './edit_components/Edit_h1';
import Edit_h3 from './edit_components/Edit_h3';
import Edit_hr from './edit_components/Edit_hr';
import Edit_p from './edit_components/Edit_p';
import Edit_img from './edit_components/Edit_img';
import Edit_Layout from './edit_components/Edit_Layout';
import Edit_btn from './edit_components/Edit_btn';
import Edit_HTML from './edit_components/Edit_HTML';
import Edit_icons from './edit_components/Edit_icons';
import Edit_video from './edit_components/Edit_video';

import { update as update_action } from '../actions/index';

import checkToken from '../functions/checkToken';

class App extends Component 
{
  constructor(props)
  {
    super(props);

    this.state={
      tabs_flag: 0
    }
  }

  componentDidMount()
  {
      // checks if user logged in or not
      if( !checkToken() )
      {
          //this.props.history.push('/');
      }
  }

  // update function that calls update action to be passed to edit components
  update = () =>
  {
    this.props.update_action();
  }


  // this renders sidebar depending upon which component is to be edited or not
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
    else if(this.props.is_btn_edit)
    {
      return <Edit_btn update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_HTML_edit)
    {
      return <Edit_HTML update ={ () => {
        this.update()
      } }/>
    }
    else if(this.props.is_icon_edit)
    {
      return <Edit_icons update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_video_edit)
    {
      return <Edit_video update ={ () => {
        this.update()
      } } />
    }
    else if(this.props.is_layout_edit)
    {
      return <Edit_Layout update ={ () => {
        this.update()
      } } />
    }
    else
    {
      // renders sidebar is nothing is to be edited 
      return this.renderMenu()
    }
  }

  // renders sidebar according to the tab selected like conent/layouts/body
  renderItemsOrLayouts = () => 
  {
    if(this.state.tabs_flag === 0)
    {
      return <Items />
    }
    else if(this.state.tabs_flag === 1)
    {
      return <Layouts />
    }
    else if(this.state.tabs_flag === 2)
    {
      return <Body />
    }
  }

  // renders sidebar is nothing is to be edited 
  renderMenu = () =>
  {
    if(this.state.tabs_flag === 0)
    {
      return (
        <div>
        <div className="tabs_container" >
        <div className="tabs" >

          <div className="tab active" >
            <div>Content</div>
          </div>

          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: 1
              })
            }}
          >
            <div>Layouts</div>
          </div>

          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: 2
              })
            }}
          >
            <div>Body</div>
          </div>

        </div>
        </div>
          {this.renderItemsOrLayouts()}
        </div>
      );
    }
    else if(this.state.tabs_flag === 1)
    {
      return (
        <div>
        <div className="tabs_container" >
        <div className="tabs" >

          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: 0
              })
            }}
          >
            <div>Content</div>
          </div>

          <div className="tab active" >
            <div>Layouts</div>
          </div>

          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: 2
              })
            }}
          >
            <div>Body</div>
          </div>

        </div>
        </div>
          {this.renderItemsOrLayouts()}
        </div>
      );  
    }
    else if(this.state.tabs_flag === 2)
    {
      return (
        <div>
        <div className="tabs_container" >
        <div className="tabs" >

          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: 0
              })
            }}
          >
            <div>Content</div>
          </div>

          <div className="tab inactive" 
            onClick = { () => {
              this.setState({
                tabs_flag: 1
              })
            }}
          >
            <div>Layouts</div>
          </div>

          <div className="tab active" >
            <div>Body</div>
          </div>
          
        </div>
        </div>
          {this.renderItemsOrLayouts()}
        </div>
      );  
    }
  }

  // whole screen is split into two one for side bar and another for preview screen
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
    is_img_edit: state.img_edit.val,
    is_layout_edit: state.layout_edit.val,
    is_btn_edit: state.btn_edit.val,
    is_HTML_edit: state.html_edit.val,
    is_icon_edit: state.icon_edit.val,
    is_video_edit: state.video_edit.val
  }
}

export default connect(mapStateToProps, {
  update_action
})(DragDropContext(HTML5Backend)(App));
