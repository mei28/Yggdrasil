import React from 'react';
import { TreeNode } from '../utils/parseInputToTree';

const TreeNodeComponent: React.FC<{ node: TreeNode; prefix: string; isLast: boolean; useAscii: boolean }> = ({ node, prefix, isLast, useAscii }) => {
  const branch = useAscii ? '|-- ' : '├── ';
  const lastBranch = useAscii ? '`-- ' : '└── ';
  const vertical = useAscii ? '|   ' : '│   ';
  const space = '    ';

  return (
    <div>
      <div>
        {prefix}{isLast ? lastBranch : branch}{node.name}
      </div>
      {node.children.length > 0 && (
        <div>
          {node.children.map((child, index) => (
            <TreeNodeComponent
              key={index}
              node={child}
              prefix={prefix + (isLast ? space : vertical)}
              isLast={index === node.children.length - 1}
              useAscii={useAscii}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeComponent;

