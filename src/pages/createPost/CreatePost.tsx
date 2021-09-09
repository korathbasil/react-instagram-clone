import styles from "./createPost.module.scss";
import Header from "components/header";

const CretePost = () => {
  return (
    <div className={styles.parent}>
      <Header activeRoute="" />
      <div className={styles.contents}></div>
    </div>
  );
};

export default CretePost;
