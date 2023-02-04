import NodeCategoryModel from '../models/NodeCategoryModel';
import Colors, { ColorName, ColorTone } from '../utils/Color';

export enum NodeCategoryType {
  CodeRunner = 'code-runner',
  Mapper = 'mapper',
  Special = 'special',
  Standard = 'standard',
}

const NodeCategories: { [key in NodeCategoryType]: NodeCategoryModel } = {
  [NodeCategoryType.CodeRunner]: {
    name: 'Code Runner',
    color: Colors.materail(ColorName.Blue, ColorTone.T300),
  },
  [NodeCategoryType.Mapper]: {
    name: 'Mapper',
    color: Colors.materail(ColorName.Yellow, ColorTone.T300),
  },
  [NodeCategoryType.Special]: {
    name: 'Special',
    color: Colors.materail(ColorName.Pink, ColorTone.T300),
  },
  [NodeCategoryType.Standard]: {
    name: 'Standard',
    color: Colors.materail(ColorName.Green, ColorTone.T300),
  },
};

export default NodeCategories;
