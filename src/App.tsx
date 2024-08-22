import React, { useState } from 'react';
import TextAreaInput from './components/TextAreaInput';
import ClipboardButton from './components/ClipboardButton';
import IndentSelector from './components/IndentSelector';
import AsciiCheckbox from './components/AsciiCheckbox';
import TreeOutput from './components/TreeOutput';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';  // Import the Footer component
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-between p-6">
      <Header />
      <About />

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

      <Footer />  {/* Add the Footer component here */}
    </div>
  );
};

export default App;

