const LabeledInput = ({ label = "Default Label", type = "text" }) => {
  return (
    <div className="flex gap-1 flex-col">
      <label>{label}</label>
      <input
        className="border border-gray-400 focus:outline focus:outline-blue-500  px-5 py-1"
        placeholder={label}
        type={type}
      />
    </div>
  );
};

export default LabeledInput;
