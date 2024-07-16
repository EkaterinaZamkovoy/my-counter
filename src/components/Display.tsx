type DisplayPropsType = {
  count: number;
  maxValue: number;
  error: string;
};

export const Display = ({ count, maxValue, error }: DisplayPropsType) => {
  const displayStyle = {
    color: error || count === maxValue ? "red" : "#5dd8f7",
  };
  return (
    <div className={`display ${error ? "error" : ""}`} style={displayStyle}>
      {error ? error : count}
    </div>
  );
};
