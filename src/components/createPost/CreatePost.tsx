import styles from "./createPost.module.scss";

import { CloseButton } from "assets/icons";

const CreatePost = () => {
  const DisableBackgroundScrolling = () => {
    document.body.style.overflow = "hidden";
  };
  DisableBackgroundScrolling();

  return (
    <div className={styles.parent}>
      <div className={styles.modal}>
        <h2>CraetePost</h2>
      </div>

      <div className={styles.exit}>
        <CloseButton />
      </div>
    </div>
  );
};

export default CreatePost;
