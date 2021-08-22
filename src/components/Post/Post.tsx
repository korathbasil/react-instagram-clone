import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import { IconButton } from "@material-ui/core";

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
    <div className="post">
      <div className="post__header">
        <div className="post__headerInfo">
          <Avatar src={avatar} />
          <h5 className="post__headerInfoUserName">{userName}</h5>
        </div>
        <MoreHorizIcon className="post__headerInfoAvatar" />
      </div>
      <div className="post__imageContainer">
        <img className="post__headerImage" src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerOptions">
          <div className="post__footerOptionsReactions">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
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
        <div className="post__footerLikeReport">
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
