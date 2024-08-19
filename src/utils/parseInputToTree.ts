export type TreeNode = {
  name: string;
  children: TreeNode[];
  isLast: boolean;
};

export const parseInputToTree = (input: string): TreeNode[] => {
  const lines = input.split('\n');
  const root: TreeNode[] = [];
  const stack: { node: TreeNode; indent: number }[] = [];

  lines.forEach((line, index) => {
    const indent = line.search(/\S|$/); // find the first non-whitespace character
    const name = line.trim();
    const isLast = index === lines.length - 1 || lines[index + 1].search(/\S|$/) <= indent;

    if (!name) return; // skip empty lines

    const newNode: TreeNode = { name, children: [], isLast };

    if (stack.length === 0 || indent === 0) {
      root.push(newNode);
      stack.push({ node: newNode, indent });
    } else {
      while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }

      if (stack.length > 0) {
        stack[stack.length - 1].node.children.push(newNode);
      }

      stack.push({ node: newNode, indent });
    }
  });

  return root;
};

