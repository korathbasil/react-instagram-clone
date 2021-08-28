import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import Logo from "../../assets/images/instagram-logo.png";
import {
  HomeFilled,
  HomeOutlined,
  MessengerFilled,
  MessengerOutlined,
  ExploreFilled,
  ExploreOutlined,
  HeartOutlined,
  HeartFilled,
} from "assets/icons";
import { useState } from "react";

const Header: React.FC<{ activeRoute: string }> = ({ activeRoute }) => {
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
              <Link to="/">
                {activeRoute === "/" ? <HomeFilled /> : <HomeOutlined />}
              </Link>
            </div>

            <div className={styles.iconWrapper}>
              <Link to="/messenger">
                {activeRoute === "/messenger" ? (
                  <MessengerFilled />
                ) : (
                  <MessengerOutlined />
                )}
              </Link>
            </div>

            <div className={styles.iconWrapper}>
              <Link to="/explore">
                {activeRoute === "/explore" ? (
                  <ExploreFilled />
                ) : (
                  <ExploreOutlined />
                )}
              </Link>
            </div>

            <div className={styles.iconWrapper}>
              <HeartOutlined />
              <HeartFilled />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* 
        <div className={styles.search}>
          <SearchIcon />
          <input />
        </div>
        <div className="header__nav">
          
        </div> */
