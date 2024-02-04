import React from "react";

const LabeledInput = ({ label = "Default Label" }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input className="bg-gray-300 border" />
    </div>
  );
};

export default LabeledInput;
