import React, { useState } from 'react';

const InputAuth = ({ initialType, placeholderPattern, setValue: setPropValue }) => {

  const [inputType, setInputType] = useState(initialType);
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setPropValue(e.target.value);
  };

  return (
    <input
      type={inputType}
      value={value}
      onChange={handleInputChange}
      className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
      required
      placeholder={placeholderPattern}
    />
  );
};

export default InputAuth;