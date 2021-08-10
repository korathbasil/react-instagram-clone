import Header from "../../components/header/Header";
import styles from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.parent}>
      <Header />
    </div>
  );
};

export default Home;
