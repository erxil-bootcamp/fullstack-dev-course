const LabeledInput = ({
  error = "",
  label = "Default Label",
  type = "text",
  ...props
}) => {
  return (
    <div className="flex gap-1 flex-col">
      <label>{label}</label>
      <input
        className={`${
          error ? "border-red-500" : "border-gray-400"
        } border border-gray-400 focus:outline focus:outline-blue-500  px-5 py-1`}
        placeholder={label}
        type={type}
        {...props}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default LabeledInput;
