import React, { Component } from 'react';

import Layout_1_1 from './layouts_items/Layout_1_1';
import Layout_1_2 from './layouts_items/Layout_1_2';
import Layout_1_3 from './layouts_items/Layout_1_3';

class Layouts extends Component 
{
    render() 
    {
        return (
            <div>
                
                <Layout_1_1 />
                <br />
                <Layout_1_2 />
                <br />
                <Layout_1_3 />

            </div>
        );
    }
}

export default Layouts;