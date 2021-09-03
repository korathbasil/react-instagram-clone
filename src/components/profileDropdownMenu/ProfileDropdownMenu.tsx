import styles from "./profileDropdownMenu.module.scss";

import {
  ProfileOutlined,
  SaveOutlined,
  SettingsOutlined,
  SwitchAccountOutlined,
} from "assets/icons";

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
        <div className={styles.menu}>
          <div className={styles.option}>
            <ProfileOutlined />
            <p>Profile</p>
          </div>
          <div className={styles.option}>
            <SaveOutlined />
            <p>Saved</p>
          </div>
          <div className={styles.option}>
            <SettingsOutlined />
            <p>Settings</p>
          </div>
          <div className={styles.option}>
            <SwitchAccountOutlined />
            <p>Switch Accounts</p>
          </div>
          <hr color="lightgrey" />
          <div className={styles.logout}>
            <p>Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdownMenu;
