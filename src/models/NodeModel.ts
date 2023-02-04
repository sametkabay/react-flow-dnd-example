import { NodeType } from './../data/Nodes';
import { NodeCategoryType } from '../data/NodeCategories';
export interface NodeModel {
  label: string;
  category: NodeCategoryType;
  key: NodeType;
}
