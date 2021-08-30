import styles from "./profileDropdownMenu.module.scss";

interface IProfileDropdownMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileDropdownMenu: React.FC<IProfileDropdownMenuProps> = ({
  isMenuOpen,
}) => {
  return (
    <div>{isMenuOpen && <div className={styles.menu}>Notifications</div>}</div>
  );
};

export default ProfileDropdownMenu;
