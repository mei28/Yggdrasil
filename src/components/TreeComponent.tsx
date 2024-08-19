import React from 'react';
import TreeNodeComponent from './TreeNodeComponent';
import { TreeNode } from '../utils/parseInputToTree';

const TreeComponent: React.FC<{ tree: TreeNode[] }> = ({ tree }) => (
  <div>
    {tree.map((node, index) => (
      <TreeNodeComponent key={index} node={node} />
    ))}
  </div>
);

export default TreeComponent;

