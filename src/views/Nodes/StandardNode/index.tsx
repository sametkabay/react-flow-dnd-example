import { Handle, Position } from 'react-flow-renderer';
import { Node } from 'reactflow';
import { NodeModel } from '../../../models/NodeModel';
import './StandardNode.scss';
import NodeCategories from '../../../data/NodeCategories';

function StandardNode(props: Node<NodeModel>) {
  const category = NodeCategories[props.data.category];
  return (
    <div className="dnd-node standard-node">
      <Handle isConnectable id={`${props.data.key}-input`} type="target" position={Position.Left} />
      <div className="standard-node-body">
        <div style={{ background: category.color }} className="node-category-color" />
        <span>{props.data.label}</span>
      </div>
      <Handle isConnectable id={`${props.data.key}-output`} type="source" position={Position.Right} />
    </div>
  );
}

export default StandardNode;
