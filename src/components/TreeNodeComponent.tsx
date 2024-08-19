import React from 'react';
import { TreeNode } from '../utils/parseInputToTree';

const TreeNodeComponent: React.FC<{ node: TreeNode; prefix: string }> = ({ node, prefix }) => (
  <div>
    <div>
      {prefix}{node.isLast ? '└── ' : '├── '}{node.name}
    </div>
    {node.children.length > 0 && (
      <div>
        {node.children.map((child, index) => (
          <TreeNodeComponent
            key={index}
            node={child}
            prefix={prefix + (node.isLast ? '    ' : '│   ')}
          />
        ))}
      </div>
    )}
  </div>
);

export default TreeNodeComponent;

