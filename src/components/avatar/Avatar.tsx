import styles from "./avatar.module.scss";

const Avatar: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt="avatar" />
    </div>
  );
};

export default Avatar;
