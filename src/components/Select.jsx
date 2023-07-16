export const Select = ({name, id, value, handleChange, options}) => {
  return (
    <select
      className="p-1 my-1 w-full bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md shadow-sm"
      name={name}
      id={id}
      onChange={handleChange}
    >
      <option className="text-sm" value={'all'} defaultChecked></option>
      {options.map((option, index) => {
        return (
          <option className="text-sm" key={index}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
