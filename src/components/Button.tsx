type ButtonPropsType = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
};

export const Button = ({
  title,
  onClick,
  disabled,
  style,
}: ButtonPropsType) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled} style={style}>
      {title}
    </button>
  );
};
