import styles from "./createPost.module.scss";
import Header from "components/header";

const CretePost = () => {
  return (
    <div className={styles.parent}>
      <Header activeRoute="" />
      <div className={styles.contents}>
        <div className={styles.child}>
          <div className={styles.nav}>
            <button>Cancel</button>
            <button>Next</button>
          </div>

          <>
            <div className={styles.imageContainer}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg"
                alt=""
              />
            </div>

            <div className={styles.optionSwitcher}>
              <div>
                <div className={styles.optionButton}>Filters</div>
                <div className={styles.optionButton}>Edit</div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default CretePost;
