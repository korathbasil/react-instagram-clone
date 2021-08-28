// Material UI elements
// import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import HeartOutlinedIcon from "assets/icons/HeartOutlinedIcon";
import styles from "./header.module.scss";

import Logo from "../../assets/images/instagram-logo.png";

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
            <HeartOutlinedIcon />
            <HomeOutlinedIcon />
            <SendOutlinedIcon />
            <ExploreOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
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
