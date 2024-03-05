import React from 'react';

interface HeaderProps {
  value: string;
}

const Header: React.FC<HeaderProps> = ({ value }) => {
  return (
    <h1 className="text-white text-3xl bg-green-800 w-full h-1/6 flex justify-start items-end pb-3 pl-2">
      {value}
    </h1>
  );
}

export default Header;
