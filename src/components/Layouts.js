// renders all the layouts that can be draged and dropped

import React, { Component } from 'react';

import Layout_1_1 from './layouts_items/Layout_1_1';
import Layout_1_2 from './layouts_items/Layout_1_2';
import Layout_1_3 from './layouts_items/Layout_1_3';
import Layout_1_2_left from './layouts_items/Layout_1_2_left';
import Layout_1_2_right from './layouts_items/Layout_1_2_right';

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
                <br />
                <Layout_1_2_left />
                <br />
                <Layout_1_2_right />

            </div>
        );
    }
}

export default Layouts;