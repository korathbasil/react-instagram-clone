import styles from "./chat.module.scss";
import { InfoOutlined } from "assets/icons";

export const Chat = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.header}>
        <div className={styles.left}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <h4>LAJOYA!</h4>
        </div>
        <InfoOutlined />
      </div>
      <div className={styles.chat}></div>
      <div className={styles.input}>hello</div>
    </div>
  );
};
