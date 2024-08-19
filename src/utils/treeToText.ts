import { TreeNode } from './parseInputToTree';

export const treeToText = (tree: TreeNode[], prefix = '', useAscii = false): string => {
  const branch = useAscii ? '|-- ' : '├── ';
  const lastBranch = useAscii ? '|-- ' : '└── ';
  const vertical = useAscii ? '|   ' : '│   ';
  const space = '    ';

  return tree
    .map((node) => {
      const line = `${prefix}${node.isLast ? lastBranch : branch}${node.name}`;
      const childrenText = treeToText(node.children, prefix + (node.isLast ? space : vertical), useAscii);
      return `${line}\n${childrenText}`;
    })
    .join('');
};

