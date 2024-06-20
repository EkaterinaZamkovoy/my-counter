type DisplayPropsType = {
  count: number;
  maxValue: number;
  startValue: number;
};

export const Display = ({ count, maxValue, startValue }: DisplayPropsType) => {
  const maxCount = maxValue;
  return (
    <div
      className="display"
      style={{ color: count === maxCount ? "red" : "#5dd8f7" }}>
      {startValue}
    </div>
  );
};
