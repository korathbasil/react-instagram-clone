import styles from "./post.module.scss";

import Avatar from "components/avatar";
import {
  MoreOptionsHorizontal,
  HeartFilledRed,
  CommentOutlined,
  ShareOutlined,
  SaveOutlined,
  SmileyOutlined,
} from "assets/icons";

interface IPostProps {
  avatar: string;
  userName: string;
  postImage: string;
  caption: string;
}

const Post: React.FC<IPostProps> = ({
  avatar,
  userName,
  postImage,
  caption,
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <Avatar src={avatar} />
          <h5 className={styles.headerInfoUserName}>{userName}</h5>
        </div>
        {/* <MoreHorizIcon className={styles.headerInfoAvatar} /> */}
        <MoreOptionsHorizontal />
      </div>

      <div className={styles.imageContainer}>
        <img className={styles.headerImage} src={postImage} alt="" />
      </div>

      <div className={styles.footer}>
        <div className={styles.options}>
          <div className={styles.reactions}>
            <HeartFilledRed />
            <CommentOutlined />
            <ShareOutlined />
          </div>
          <SaveOutlined />
        </div>
        <div className={styles.likeStats}>
          <p>Johgn Lucas and 3 others like this image</p>
        </div>
        <div className={styles.comments}>
          <p>
            <strong>{userName}</strong> {caption}
          </p>
          <p className={styles.commentCount}>View all 899 Comments</p>
          <p>
            <strong>James Alvaro</strong> {caption}
          </p>
          <p>
            <strong>Joseph Kennedy</strong> {caption}
          </p>
        </div>
        <div className={styles.timeStamp}>
          <p>4 hours ago</p>
        </div>
      </div>
      <form className={styles.addCommentForm}>
        <SmileyOutlined />
        <input type="text" placeholder="Add a comment..." />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
