import React, { useState } from "react";

interface IDropdownMenuProps {
  render: (
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
}

const DropdownMenu: React.FC<IDropdownMenuProps> = ({ render }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div>{render(isMenuOpen, setIsMenuOpen)}</div>;
};

export default DropdownMenu;
