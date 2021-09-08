import { useAppSelector } from "state";
import styles from "./messenger.module.scss";

import Header from "components/header";

const Messenger = () => {
  const name = useAppSelector((state) => state.user.name);
  return (
    <div className={styles.parent}>
      <Header activeRoute={"/messenger"} />
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Messenger;
