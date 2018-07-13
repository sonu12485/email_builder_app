// renders all the components that can be draged and dropped

import React, { Component } from 'react';

import Heading from './content_items/Heading';
import SubHeading from './content_items/SubHeading';
import HR from './content_items/HorizontalRule';
import Paragraph from './content_items/Paragraph';
import Image from './content_items/Image';
import Button from './content_items/Button';
import HTML from './content_items/Html';
import SocialMediaIcons from './content_items/SocialMediaIcons';
import Video from './content_items/Video';

class Items extends Component
{
    render()
    {
        return (
            <div className="item_container col-md-12" >
            <div className="row">
                <div className="col-md-4 p-0">
                    <Heading />
                </div>
                <div className="col-md-4 p-0">
                    <SubHeading />
                </div>
                 <div className="col-md-4 p-0">
                     <HTML />
                </div>
                <div className="col-md-4 p-0">
                    <Paragraph />
                </div>
                <div className="col-md-4 p-0">
                    <Image />
                </div>
                <div className="col-md-4 p-0">
                    <Button />
                </div>
               
                <div className="col-md-4 p-0">
                    <HR />
                </div>
                <div className="col-md-4 p-0">
                 <SocialMediaIcons />
                </div>
                <div className="col-md-4 p-0">
                 <Video />
                </div>
                </div>
            </div>
        )
    }
}

export default Items;
