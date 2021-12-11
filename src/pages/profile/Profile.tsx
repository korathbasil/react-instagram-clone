import styles from "./profile.module.scss";
import { Header, ProfileHero } from "components";

const Profile = () => {
  return (
    <div className={styles.parent}>
      <Header activeRoute="" />
      <div className={styles.main}>
        <ProfileHero />
      </div>
    </div>
  );
};

export default Profile;
