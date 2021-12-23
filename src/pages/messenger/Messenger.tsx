import { useAppSelector } from "state";
import styles from "./messenger.module.scss";

import Header from "components/header";

const Messenger = () => {
  const name = useAppSelector((state) => state.user.name);
  return (
    <div className={styles.parent}>
      <Header activeRoute={"/messenger"} />
      <div className={styles.main}>
        <div className={styles.chat}>
          <div className={styles.left}>
            <div className={styles.header}></div>
          </div>
          <div className={styles.right}>
            <div className={styles.header}>header</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
