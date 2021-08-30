import styles from "./notificationsDropdownMenu.module.scss";

interface INotifiactionsDropdownMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationsDropdownMenu: React.FC<INotifiactionsDropdownMenuProps> = ({
  isMenuOpen,
}) => {
  return (
    <div>{isMenuOpen && <div className={styles.menu}>Notifications</div>}</div>
  );
};

export default NotificationsDropdownMenu;
