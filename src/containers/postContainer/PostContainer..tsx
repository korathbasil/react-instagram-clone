import Post from "components/post";

const PostContainer: React.FC = () => {
  return (
    <Post
      avatar="https://upload.wikimedia.org/wikipedia/commons/d/df/Sabrina_Carpenter_2019.jpg"
      userName="Sabrina Carpenter"
      postImage="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      caption="Hello World 🔥🔥👏"
    />
  );
};

export default PostContainer;
