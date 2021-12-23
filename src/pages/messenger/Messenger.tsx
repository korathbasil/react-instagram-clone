import { useAppSelector } from "state";
import styles from "./messenger.module.scss";

import { DownArrow, CreateMessage } from "assets/icons";
import Header from "components/header";

const Messenger = () => {
  const name = useAppSelector((state) => state.user.name);
  return (
    <div className={styles.parent}>
      <Header activeRoute={"/messenger"} />
      <div className={styles.main}>
        <div className={styles.chat}>
          <div className={styles.left}>
            <div className={styles.header}>
              <div>
                <h4>Korathbasil</h4>
                <DownArrow />
              </div>
              <CreateMessage />
            </div>
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
