import React, { Component } from 'react';

import { Button } from 'reactstrap';

import { connect } from 'react-redux';

import { edit_p, delete_item, edit_p_data } from '../../actions/edit_actions';

import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Edit_p extends Component 
{
    constructor(props)
    {
        super(props);

        const selectedItem = this.props.items.find( item => {
            return item.id === this.props.data.id
        });

        const initContent = convertFromHTML("<p>"+selectedItem.data+"</p>");

        const initEditorContent = ContentState.createFromBlockArray(initContent);

        const initEditorState = EditorState.createWithContent(initEditorContent);

        this.state={
            editorState: initEditorState
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
    };

    deleteElement = () =>
    {
        const id = this.props.data.id;
        
        this.props.delete_item(id);
        this.props.update();
        this.props.edit_p();
    }

    render() 
    {
        const { editorState } = this.state;

        return (
            <div>
                
                <div className="btn_container" >
                    <Button color="primary" 
                        onClick={ () => this.props.edit_p() }
                    >DONE</Button>
                    <Button color="danger" 
                        onClick={ () => this.deleteElement() }
                    >DELETE</Button>
                </div>

                <div className="editor" >
                    <Editor
                        defaultEditorState={editorState}
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        toolbar={{
                            options: ['inline', 'colorPicker', 'fontSize',
                                'fontFamily', 'link', 
                                'textAlign', 'history'],
                            inline: { inDropdown: true } 
                        }}
                        onEditorStateChange={(editorState) => {
                            this.onEditorStateChange(editorState);
                            this.props.edit_p_data(
                                this.props.data.id,
                                draftToHtml(convertToRaw(editorState.getCurrentContent()))
                            );
                            this.props.update();
                        }}
                    />
                </div>

            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        data: state.p_edit,
        items: state.items
    }
}

export default connect(mapStateToProps, {
    edit_p,
    delete_item,
    edit_p_data,
})(Edit_p);
