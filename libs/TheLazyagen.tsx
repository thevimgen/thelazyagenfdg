import React from "react";

const TheLazyagen: React.FC<TheLazyagenProps> = ({
  text,
  size,
  color,
  bg,
  ...props
}) => {
  return (
    <button
      style={{ fontSize: size, color: color, backgroundColor: bg }}
      {...props}
    >
      {text}
    </button>
  );
};

export { TheLazyagen };
