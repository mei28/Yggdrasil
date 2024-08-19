import React from 'react';

type TextAreaInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  indentSize: number;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({ value, onChange, indentSize }) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const indent = ' '.repeat(indentSize);

      if (!e.shiftKey) {
        textarea.value = value.substring(0, start) + indent + value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + indentSize;
      } else {
        const lineStart = value.lastIndexOf('\n', start - 1) + 1;
        if (value.substring(lineStart, lineStart + indentSize) === indent) {
          textarea.value = value.substring(0, lineStart) + value.substring(lineStart + indentSize);
          textarea.selectionStart = textarea.selectionEnd = start - indentSize;
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
      className="font-mono w-full h-[20rem] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder={`Plaease enter your file structure here...
---
folder1
  file1.txt
  file2.txt
folder2
  folder3
    file3.txt`}
    />
  );
};

export default TextAreaInput;

