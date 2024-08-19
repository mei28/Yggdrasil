import React from 'react';
import TreeNodeComponent from './TreeNodeComponent';
import { TreeNode } from '../utils/parseInputToTree';

const TreeComponent: React.FC<{ tree: TreeNode[] }> = ({ tree }) => (
  <div className="font-mono">
    {tree.map((node, index) => (
      <TreeNodeComponent key={index} node={node} prefix="" />
    ))}
  </div>
);

export default TreeComponent;

