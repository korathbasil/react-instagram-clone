import { useState } from "react";
import { Link } from "react-router-dom";

import axios from "config/axios";

import styles from "./login.module.scss";

import Logo from "assets/images/instagram-logo-black.png";
import FacebookLogoSmall from "assets/images/facebook-logo-small.png";

const Login: React.FC = () => {
  const [loginInputValues, setLoginInputValues] = useState({
    email: "",
    password: "",
  });

  const loginInputValueModifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInputValues({
      ...loginInputValues,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // axios
    //   .post("/api/user/signup", {
    //     email: "ronaldo@email.com",
    //     name: "Cristiano Ronaldo",
    //     username: "cristiano",
    //     password: "iamronaldo",
    //   })
    //   .then((data) => console.log(data))
    //   .catch((e) => console.log(e.response));

    axios
      .post("/api/user/login", {
        email: loginInputValues.email,
        password: loginInputValues.password,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => console.log(e.response));
  };

  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <form className={styles.loginForm} action="" onSubmit={loginHandler}>
          <img src={Logo} alt="" />

          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Phone number, username or email address"
            required
            onChange={loginInputValueModifier}
          />

          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Password"
            required
            onChange={loginInputValueModifier}
          />

          <button type="submit">Log in</button>

          {/* Here goes the devider */}

          <div className={styles.loginFB}>
            <img src={FacebookLogoSmall} alt="facebook-logo" />
            <p>Login with Facebook</p>
          </div>
          <p>Forgotten your password ?</p>
        </form>
        <div className={styles.bottom}>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
