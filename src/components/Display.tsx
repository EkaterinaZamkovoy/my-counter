type DisplayPropsType = {
  count: number;
};

export const Display = ({ count }: DisplayPropsType) => {
  const maxCount = 5;
  return (
    <div
      className="display"
      style={{ color: count === maxCount ? "red" : "black" }}>
      {count}
    </div>
  );
};
