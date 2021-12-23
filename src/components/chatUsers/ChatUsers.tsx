import styles from "./chatUsers.module.scss";
import { DownArrow, CreateMessage } from "assets/icons";

export const ChatUsers = () => {
  return (
    <section>
      <div className={styles.header}>
        <CreateMessage />
        <div>
          <h4>Korathbasil</h4>
          <DownArrow />
        </div>
      </div>

      <div className={styles.people}></div>
    </section>
  );
};
