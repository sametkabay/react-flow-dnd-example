import NodeCategories from '../../data/NodeCategories';
import Nodes, { NodeType } from '../../data/Nodes';
import './Sidebar.scss';
import { Input } from 'antd';
const { Search } = Input;

function Sidebar() {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: NodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onSearch = (value: string) => console.log(value);

  return (
    <div className="dnd-flow-sidebar">
      <div className="sidebar-header">
        <Search className="sidebar-search" placeholder="Search" allowClear onSearch={onSearch} />
      </div>
      <div className="sidebar-description">
        <span>Drag the node you want to use to the panel</span>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-nodes">
          {Object.values(Nodes).map((n, i) => {
            const category = NodeCategories[n.category];
            return (
              <div key={'node' + i} className="node-item" onDragStart={(event) => onDragStart(event, n.key)} draggable>
                <div style={{ background: category.color }} className="node-category-color" />
                <span className="node-label">{n.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="category-colors">
          {Object.values(NodeCategories).map((nc, i) => {
            return (
              <div key={'category-color' + i} className="category-color-item">
                <div style={{ background: nc.color }} className="color-box" />
                <span>{nc.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
