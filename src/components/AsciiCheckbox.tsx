import React from 'react';

type AsciiCheckboxProps = {
  useAscii: boolean;
  onToggle: (checked: boolean) => void;
};

const AsciiCheckbox: React.FC<AsciiCheckboxProps> = ({ useAscii, onToggle }) => {
  return (
    <label className="mt-4 flex items-center text-gray-600">
      <input
        type="checkbox"
        className="mr-2"
        checked={useAscii}
        onChange={(e) => onToggle(e.target.checked)}
      />
      Use ASCII characters only
    </label>
  );
};

export default AsciiCheckbox;
