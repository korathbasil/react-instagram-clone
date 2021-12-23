import { useAppSelector } from "state";
import styles from "./messenger.module.scss";

import { Header, ChatUsers, Chat } from "components";

const Messenger = () => {
  const name = useAppSelector((state) => state.user.name);
  return (
    <div className={styles.parent}>
      <Header activeRoute={"/messenger"} />
      <div className={styles.main}>
        <div className={styles.chat}>
          <div className={styles.left}>
            <ChatUsers />
          </div>

          <div className={styles.right}>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserSelector = () => {
  return <div>People</div>;
};

export default Messenger;
