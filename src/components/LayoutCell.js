import React, { Component } from 'react';

import { DropTarget } from 'react-dnd';

function collect(connect, monitor)
{
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

const spec = {
    drop(props, monitor, component)
    {
        return {
            location: props.location,
            layout_id: props.layout_id
        }
    }
};

class LayoutCell extends Component {
    render() {

        const { connectDropTarget, hovered, item } = this.props;
        
        return connectDropTarget(
            <td className="layout_table_cells"
            >Drop Components here.</td>
        );

    }
}

export default DropTarget('item', spec, collect)(LayoutCell);