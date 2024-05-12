import React from "react";
const LabelFromAuth = ({ children }) => {
    return (
      <label
        className="block text-gray-700 text-sm font-semibold mb-2">
        {children}
      </label>
    );
  };
export default LabelFromAuth;