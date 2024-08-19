import React, { useState } from 'react';
import TextAreaInput from './components/TextAreaInput';
import ClipboardButton from './components/ClipboardButton';
import IndentSelector from './components/IndentSelector';
import AsciiCheckbox from './components/AsciiCheckbox';
import TreeOutput from './components/TreeOutput';
import CollapsibleSection from './components/CollapsibleSection';
import { parseInputToTree } from './utils/parseInputToTree';
import { treeToText } from './utils/treeToText';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [useAscii, setUseAscii] = useState(false);
  const [indentSize, setIndentSize] = useState(4);

  const tree = parseInputToTree(input);
  const treeText = treeToText(tree, '', useAscii);

  const handleCopy = () => {
    navigator.clipboard.writeText(treeText).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => console.error('Failed to copy text:', err)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Yggdrasil</h1>
        <p className="text-lg text-gray-600">Generate and visualize your directory structure with ease.</p>
      </header>

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

      <div className="flex w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="w-1/2 p-6 flex flex-col">
          <TextAreaInput value={input} onChange={(e) => setInput(e.target.value)} indentSize={indentSize} />
          <AsciiCheckbox useAscii={useAscii} onToggle={setUseAscii} />
          <IndentSelector indentSize={indentSize} onChange={setIndentSize} />
        </div>
        <div className="w-1/2 p-6 bg-gray-100 flex flex-col relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Tree Output:</h2>
            <ClipboardButton onCopy={handleCopy} />
          </div>
          <TreeOutput treeText={treeText} />
          {copied && (
            <div className="absolute top-2 right-2 text-gray-600 text-sm">
              Copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
