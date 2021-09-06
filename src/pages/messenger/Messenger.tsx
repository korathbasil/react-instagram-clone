import { useSelector } from "react-redux";
import { useAppSelector } from "state";

import { RootState } from "state/store";

import styles from "./messenger.module.scss";

import Header from "components/header";

const Messenger = () => {
  // const { name, age } = useSelector((state: RootState) => state.user);
  const { name, age } = useAppSelector((state) => state.user);
  return (
    <div className={styles.parent}>
      <Header activeRoute={"/messenger"} />
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>Messenger Page</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>Messenger Page</h1>
    </div>
  );
};

export default Messenger;
