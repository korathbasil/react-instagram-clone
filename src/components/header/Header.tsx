import { useState } from "react";
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
import Avatar from "components/avatar";
import DropdownMenu from "components/dropdownMenu";
import ProfileDropdownMenu from "components/profileDropdownMenu";
import NotificationsDropdownMenu from "components/notificationsDropdownMenu";

const Header: React.FC<{ activeRoute: string }> = ({ activeRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpeningHalndler = () => setIsMenuOpen(!isMenuOpen);

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

            <div className={styles.iconWrapper} onClick={menuOpeningHalndler}>
              <HeartOutlined />
              <HeartFilled />
              <DropdownMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                render={(isMenuOpen, setIsMenuOpen) => (
                  <NotificationsDropdownMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                )}
              />
            </div>
            <div className={styles.iconWrapper} onClick={menuOpeningHalndler}>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg" />
              <DropdownMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                render={(isMenuOpen, setIsMenuOpen) => (
                  <ProfileDropdownMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                )}
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
