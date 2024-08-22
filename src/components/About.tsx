import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const About: React.FC = () => (
  <CollapsibleSection title="About Yggdrasil">
    <p className="mb-4">
      Yggdrasil is a tool designed to help you create, visualize, and export directory structures in a tree format.
      Whether you're documenting a project, sharing a file structure, or just organizing your thoughts, Yggdrasil makes it easy to generate a tree diagram from a simple text input.
    </p>
    <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Create directory structures with simple indentation.</li>
      <li>Choose between ASCII and Unicode characters for tree visualization.</li>
      <li>Customize the indentation size to match your preferences.</li>
      <li>Use <strong>Tab</strong> to increase and <strong>Shift+Tab</strong> to decrease indentation in the input area.</li>
      <li>Copy the generated tree structure to the clipboard for easy sharing.</li>
    </ul>
    <h3 className="text-xl font-semibold mb-2">How to Use:</h3>
    <ol className="list-decimal list-inside mb-4">
      <li>Enter your directory structure in the input area using indentation to define hierarchy.</li>
      <li>Select your preferred options, such as ASCII mode and indentation size.</li>
      <li>View the generated tree structure on the right side of the screen.</li>
      <li>Click the copy button to copy the tree structure to your clipboard.</li>
    </ol>
  </CollapsibleSection>
);

export default About;

