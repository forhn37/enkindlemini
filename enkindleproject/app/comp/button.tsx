import React from 'react';

interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <button className="flex justify-center items-center rounded-full w-full h-full bg-green-800 ">{value}</button>
  );
}

export default Button;
