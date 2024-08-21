type DisplayPropsType = {
  count: number;
  maxValue: number;
  error: string;
  message: boolean;
};

export const Display = ({
  count,
  maxValue,
  error,
  message,
}: DisplayPropsType) => {
  const displayStyle = {
    color: error || count === maxValue ? "red" : "#5dd8f7",
  };
  return (
    <div
      className={`display ${error ? "error" : message ? "message" : ""}`}
      style={displayStyle}>
      {error ? error : message ? "Enter values and press set" : count}
    </div>
  );
};
