import { NodeType } from '../../data/Nodes';
import StandardNode from '../Nodes/StandardNode';
import { NodeTypes } from 'react-flow-renderer';

const nodeTypes: NodeTypes = {
  [NodeType.PythonRunner]: StandardNode as any,
  [NodeType.NodeJsRunner]: StandardNode as any,
  [NodeType.DataMapper]: StandardNode as any,
  [NodeType.Analyzer]: StandardNode as any,
  [NodeType.Graph]: StandardNode as any,
};

export default nodeTypes;
