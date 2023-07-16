export const Input = ({type, name, id, value, handleChange, min, max, step}) => {
  return (
    <input
      type={type}
      name={name}
      min={min ? '10' : undefined}
      max={max ? max : undefined}
      step={step ? '10' : undefined}
      id={id}
      value={value}
      className="bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md shadow-sm"
      onChange={handleChange}
    />
  );
};
