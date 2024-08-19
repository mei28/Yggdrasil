import React from 'react';

type TextAreaInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  indentSize: number; // インデント幅を受け取るプロップスを追加
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, indentSize }) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const indent = ' '.repeat(indentSize); // 指定されたインデント幅を使用

      // Set the new value with tab space or dedent
      if (!e.shiftKey) {
        textarea.value = value.substring(0, start) + indent + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + indentSize; // Move the cursor after the inserted tab
      } else {
        // Handle Shift + Tab (dedent)
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        if (value.substring(lineStart, lineStart + indentSize) === indent) {
          textarea.value = value.substring(0, lineStart) + value.substring(lineStart + indentSize);
          textarea.selectionStart = textarea.selectionEnd = start - indentSize; // Move the cursor after the dedented tab
        }
      }

      onChange({
        target: {
          value: textarea.value
        }
      } as React.ChangeEvent<HTMLTextAreaElement>);
    }
  };

  return (
    <textarea
      className="font-mono w-full h-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown} // Add keydown handler for TAB key
      placeholder="Enter your file structure here..."
    />
  );
};

export default TextAreaInput;

