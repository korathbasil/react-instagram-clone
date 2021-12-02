import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import Logo from "../../assets/images/instagram-logo-black.png";
import {
  HomeFilled,
  HomeOutlined,
  MessengerFilled,
  MessengerOutlined,
  AddPostFilled,
  AddPostOutlined,
  ExploreFilled,
  ExploreOutlined,
  HeartOutlined,
  HeartFilled,
} from "assets/icons";
import Avatar from "components/avatar";
import ProfileDropdownMenu from "components/profileDropdownMenu";
import NotificationsDropdownMenu from "components/notificationsDropdownMenu";

const Header: React.FC<{ activeRoute: string }> = ({ activeRoute }) => {
  const [openedMenu, setOpenedMenu] = useState("");

  const menuOpeningHalndler = (menuName: string) => {
    if (openedMenu === menuName) setOpenedMenu("");
    else setOpenedMenu(menuName);
  };

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
              <Link to="/create">
                {activeRoute === "/create" ? (
                  <AddPostFilled />
                ) : (
                  <AddPostOutlined />
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

            <div
              className={styles.iconWrapper}
              onClick={() => menuOpeningHalndler("notifications")}
            >
              {openedMenu !== "notifications" && <HeartOutlined />}
              {openedMenu === "notifications" && <HeartFilled />}
              <NotificationsDropdownMenu
                openedMenu={openedMenu}
                setOpenedMenu={setOpenedMenu}
              />
            </div>
            <div
              className={styles.iconWrapper}
              onClick={() => menuOpeningHalndler("profile")}
            >
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg" />
              <ProfileDropdownMenu
                openedMenu={openedMenu}
                setOpenedMenu={setOpenedMenu}
              />
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
