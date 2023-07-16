export const Label = ({ text, forInput }) => {
  return (
  <label className="uppercase mx-2 text-sm" htmlFor={forInput}>
    {text}
  </label>
  );
};
