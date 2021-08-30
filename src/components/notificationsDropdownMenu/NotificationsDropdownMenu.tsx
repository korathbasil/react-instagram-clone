import styles from "./notificationsDropdownMenu.module.scss";

interface INotifiactionsDropdownMenuProps {
  openedMenu: string;
  setOpenedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const NotificationsDropdownMenu: React.FC<INotifiactionsDropdownMenuProps> = ({
  openedMenu,
}) => {
  return (
    <div>
      {openedMenu === "notifications" && (
        <div className={styles.menu}>
          <h2>Notifications</h2>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdownMenu;
