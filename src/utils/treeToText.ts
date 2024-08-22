import { TreeNode } from './parseInputToTree';

export const treeToText = (tree: TreeNode[], prefix = '', useAscii = false): string => {
  const branch = useAscii ? '|-- ' : '├── ';
  const lastBranch = useAscii ? '`-- ' : '└── ';
  const vertical = useAscii ? '|   ' : '│   ';
  const space = '    ';

  return tree
    .map((node, index) => {
      const isLastChild = index === tree.length - 1;
      const newPrefix = prefix + (isLastChild ? space : vertical);
      const line = `${prefix}${isLastChild ? lastBranch : branch}${node.name}`;
      const childrenText = treeToText(node.children, newPrefix, useAscii);
      return `${line}\n${childrenText}`;
    })
    .join('');
};

