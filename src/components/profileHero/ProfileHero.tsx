import styles from "./profileHero.module.scss";

const ProfileHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default ProfileHero;
