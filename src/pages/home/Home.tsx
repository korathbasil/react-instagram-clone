import Header from "../../components/header/Header";
import styles from "./home.module.scss";
import Post from "components/post";

const Home: React.FC = () => {
  return (
    <div className={styles.parent}>
      <Header />
      <div className={styles.container}>
        <Post
          avatar="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg"
          userName="John Lucas"
          postImage="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg"
          caption="Hello World"
        />
      </div>
    </div>
  );
};

export default Home;
