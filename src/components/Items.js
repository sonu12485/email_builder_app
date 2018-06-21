import React, { Component } from 'react';

import Heading from './Heading';
import SubHeading from './SubHeading';
import HR from './HorizontalRule';
import Paragraph from './Paragraph';
import Image from './Image';

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
            </div>
        )
    }
}

export default Items;
