import styles from "./post.module.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import { IconButton } from "@material-ui/core";

import Avatar from "components/avatar";
import { MoreOptionsHorizontal, HeartFilledRed } from "assets/icons";

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
        <div className={styles.footerOptions}>
          <div className={styles.footerOptionsReactions}>
            <HeartFilledRed />
            <IconButton>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <IconButton>
              <SendOutlinedIcon />
            </IconButton>
          </div>
          <IconButton>
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </div>
        <div className={styles.footerLikeReport}>
          <p>Johgn Lucas and 3 others like this image</p>
        </div>
        <p>
          <strong>{userName}</strong> {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
