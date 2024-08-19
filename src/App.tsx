import React, { useState } from 'react';
import TreeComponent from './components/TreeComponent';
import { parseInputToTree } from './utils/parseInputToTree';

const App: React.FC = () => {
  const [input, setInput] = useState('');

  const tree = parseInputToTree(input);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="w-1/2 p-6 flex flex-col">
          <textarea
            className="w-full h-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your file structure here..."
          />
        </div>
        <div className="w-1/2 p-6 bg-gray-100 flex flex-col">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Tree Output:</h2>
          <div className="bg-white p-4 border border-gray-300 rounded-md flex-1 text-sm text-gray-700 overflow-auto">
            <TreeComponent tree={tree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

