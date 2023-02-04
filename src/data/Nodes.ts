import { NodeModel } from '../models/NodeModel';
import { NodeCategoryType } from './NodeCategories';
// import NodeType from '../types/NodeType';

export enum NodeType {
  PythonRunner = 'python-runner',
  NodeJsRunner = 'nodejs-runner',
  DataMapper = 'data-mapper',
  Analyzer = 'analyzer',
  Graph = 'graph',
}

const Nodes: { [key in NodeType]: NodeModel } = {
  [NodeType.PythonRunner]: {
    label: 'Python Runner',
    category: NodeCategoryType.CodeRunner,
    key: NodeType.PythonRunner,
  },
  [NodeType.NodeJsRunner]: {
    label: 'NodeJS Runner',
    category: NodeCategoryType.CodeRunner,
    key: NodeType.NodeJsRunner,
  },
  [NodeType.DataMapper]: {
    label: 'Data Mapper',
    category: NodeCategoryType.Mapper,
    key: NodeType.DataMapper,
  },
  [NodeType.Analyzer]: {
    label: 'Analyzer',
    category: NodeCategoryType.Special,
    key: NodeType.Analyzer,
  },
  [NodeType.Graph]: {
    label: 'Graph',
    category: NodeCategoryType.Standard,
    key: NodeType.Graph,
  },
};

export default Nodes;
