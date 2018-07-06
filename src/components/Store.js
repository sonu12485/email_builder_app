import React, { Component } from 'react';

import { connect } from 'react-redux';

import { 
    Button, Card, CardImg, CardBody, CardTitle
} from 'reactstrap';

import { 
    edit_img_src, delete_image_from_store 
} from '../actions/edit_actions';

import { withRouter } from 'react-router-dom';

class Store extends Component {

    renderUploadBtn = (url) =>
    {
        if(this.props.is_img_edit)
        {
            return (
                <Button color="primary" className="btn-sm mr-1"
                    onClick={ () => {
                        const { id, layout_id, position } = this.props.data;

                        this.props.edit_img_src(
                            id,
                            url,
                            layout_id,
                            position
                        );

                        this.props.history.push("/");
                    }}
                >SELECT</Button>
            );
        }
        else
        {
            return <div></div>
        }
    }

    renderImages = () =>
    {
        return this.props.images.map( image => {
            return (
                <Card className="image_card" 
                    key={image.id}
                >
                    <CardImg top 
                        width="100%" 
                        height="250"
                        src={image.url}
                    />
                    <CardBody>
                        <CardTitle>{image.name}</CardTitle>
                        {this.renderUploadBtn(image.url)}
                        <Button color="danger" className="btn-sm"
                            onClick={ () => {
                                this.props.delete_image_from_store(image.id);
                            }}
                        >DELETE</Button>
                    </CardBody>
                </Card>
            );
        });
    }

    render() {
        return (
            <div>
                 <div className="store_header" >
                 <div className="container">
                   <div className="row">
                    <div className="col-md-8" >
                        <h3>Image Store</h3>
                    </div>
                    <div className="col-md-4" >
                        <Button color="primary"
                            onClick={ () => {this.props.history.push("/")}} className="btn-sm float-right"
                        >BACK</Button>
                    </div>
                    </div>
                 </div>
                </div>
                <div className="store_content" >
                    <div className="store_content_image_container" >
                        {this.renderImages()}
                    </div>
                    <div className="store_content_upload" >
                        <div>
                            <Button color="primary"
                                onClick={ () => {}}
                            >UPLOAD IMAGE TO STORE</Button>
                        </div>
                    </div>
                </div>
                <br />
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
        images: state.image_store,
        is_img_edit: state.img_edit.val,
        data: state.img_edit
    }
}

export default withRouter(connect(mapStateToProps, {
    edit_img_src,
    delete_image_from_store
})(Store));
