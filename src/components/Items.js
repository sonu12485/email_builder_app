import React, { Component } from 'react';

import Heading from './content_items/Heading';
import SubHeading from './content_items/SubHeading';
import HR from './content_items/HorizontalRule';
import Paragraph from './content_items/Paragraph';
import Image from './content_items/Image';
import Button from './content_items/Button';

class Items extends Component
{
    render()
    {
        return (
            <div className="item_container" >
                <Heading />
                <SubHeading />
                <HR />
                <Paragraph />
                <Image />
                <Button />
            </div>
        )
    }
}

export default Items;
