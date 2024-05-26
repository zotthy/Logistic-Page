import React from 'react';

const InputFieldPrice = ({ setData }) => {
  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  return (
    <input
      type="number"
      name="data"
      id=" data"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
      onChange={handleInputChange}/>
  );
};

export default InputFieldPrice;