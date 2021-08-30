import styles from "./profileDropdownMenu.module.scss";

import {
  ProfileLined,
  SaveLined,
  SettingsLined,
  SwitchAccountLined,
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
            <ProfileLined />
            <p>Profile</p>
          </div>
          <div className={styles.option}>
            <SaveLined />
            <p>Saved</p>
          </div>
          <div className={styles.option}>
            <SettingsLined />
            <p>Settings</p>
          </div>
          <div className={styles.option}>
            <SwitchAccountLined />
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
