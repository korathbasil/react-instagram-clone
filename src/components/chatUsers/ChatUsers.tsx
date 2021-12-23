import styles from "./chatUsers.module.scss";
import { DownArrow, CreateMessage } from "assets/icons";

export const ChatUsers = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <CreateMessage />
        <div>
          <h4>Korathbasil</h4>
          <DownArrow />
        </div>
      </div>

      <div className={styles.people}>
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
        <UserSelector />
      </div>
    </div>
  );
};

const UserSelector = () => {
  return (
    <div className={styles.userSelector}>
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className={styles.userLabel}>
        <p>User</p>
        <p>last message was </p>
      </div>
      <div className={styles.unread}></div>
    </div>
  );
};
