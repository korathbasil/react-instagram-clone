import { useState } from "react";
import { Switch } from "react-router-dom";

import { Login, Signup, Home, Messenger, Explore, Profile } from "pages";

import PrivateRoute from "utils/PrivateRoute";
import CreatePost from "components/createPost";

const PrivateApp = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const createPostModalHandler = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };
  return (
    <>
      <Switch>
        <PrivateRoute path="/login" component={Login} />
        <PrivateRoute path="/signup" component={Signup} />
        <PrivateRoute path="/messenger" component={Messenger} />
        <PrivateRoute path="/explore" component={Explore} />
        {/* <PrivateRoute path="/create" component={CreatePost} /> */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
      {isCreatePostModalOpen && (
        <CreatePost modalHandler={createPostModalHandler} />
      )}
    </>
  );
};

export default PrivateApp;
