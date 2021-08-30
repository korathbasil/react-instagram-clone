import styles from "./profileDropdownMenu.module.scss";

interface IProfileDropdownMenuProps {
  openedMenu: string;
  setOpenedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileDropdownMenu: React.FC<IProfileDropdownMenuProps> = ({
  openedMenu,
}) => {
  return (
    <div>
      {openedMenu === "profile" && (
        <div className={styles.menu}>Notifications</div>
      )}
    </div>
  );
};

export default ProfileDropdownMenu;
