import styles from "./home.module.scss";

import Header from "components/header";
import PostContainer from "containers/postContainer/";

const Home: React.FC = () => {
  return (
    <div className={styles.parent}>
      <Header activeRoute={"/"} />
      <div className={styles.main}>
        <div className={styles.left}>
          <PostContainer />
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Home;
