import React from 'react';
import { TreeNode } from '../utils/parseInputToTree';

const TreeNodeComponent: React.FC<{ node: TreeNode }> = ({ node }) => (
  <div className="ml-4">
    <div className="font-medium">{node.name}</div>
    {node.children.length > 0 && (
      <div className="pl-4 border-l border-gray-400">
        {node.children.map((child, index) => (
          <TreeNodeComponent key={index} node={child} />
        ))}
      </div>
    )}
  </div>
);

export default TreeNodeComponent;

