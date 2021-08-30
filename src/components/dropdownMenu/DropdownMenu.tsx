interface IDropdownMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  render: (
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
}

const DropdownMenu: React.FC<IDropdownMenuProps> = ({
  render,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return <div>{render(isMenuOpen, setIsMenuOpen)}</div>;
};

export default DropdownMenu;
