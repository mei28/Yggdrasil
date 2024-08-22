export type TreeNode = {
  name: string;
  children: TreeNode[];
};

export const parseInputToTree = (input: string): TreeNode[] => {
  const lines = input.split('\n').filter(line => line.trim() !== '');
  const root: TreeNode[] = [];
  const stack: { node: TreeNode; indent: number }[] = [];

  lines.forEach(line => {
    const indent = line.search(/\S|$/); // Find the first non-whitespace character
    const name = line.trim();

    const newNode: TreeNode = { name, children: [] };

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

