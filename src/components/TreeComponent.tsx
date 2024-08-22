import React from 'react';
import TreeNodeComponent from './TreeNodeComponent';
import { TreeNode } from '../utils/parseInputToTree';

const TreeComponent: React.FC<{ tree: TreeNode[]; useAscii: boolean }> = ({ tree, useAscii }) => (
  <div className="font-mono">
    {tree.map((node, index) => (
      <TreeNodeComponent key={index} node={node} prefix="" isLast={index === tree.length - 1} useAscii={useAscii} />
    ))}
  </div>
);

export default TreeComponent;

