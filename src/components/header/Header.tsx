import styles from "./header.module.scss";
import Logo from "../../assets/images/instagram-logo.png";
import {
  HomeOutlined,
  MessengerOutlined,
  ExploreOutlined,
  HeartOutlined,
} from "assets/icons";

function Header() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img className={styles.logo} src={Logo} alt="Instagram" />
        </div>
        <div className={styles.center}></div>
        <div className={styles.right}>
          <nav>
            <div className={styles.iconWrapper}>
              <HomeOutlined />
            </div>
            <div className={styles.iconWrapper}>
              <MessengerOutlined />
            </div>
            <div className={styles.iconWrapper}>
              <ExploreOutlined />
            </div>
            <div className={styles.iconWrapper}>
              <HeartOutlined />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* 
        <div className={styles.search}>
          <SearchIcon />
          <input />
        </div>
        <div className="header__nav">
          
        </div> */
}
