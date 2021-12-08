import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./signup.module.scss";

import Logo from "assets/images/instagram-logo-black.png";

const Signup = () => {
  const [signupInputvalues, setSignupInputValues] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const signupInputValueModifier = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInputValues({
      ...signupInputvalues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <form action="" className={styles.signupForm}>
          <img src={Logo} alt="" />
          <h6>
            <span>Sign up to see photos and</span>
            <span>videos from your friends.</span>
          </h6>

          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Mobile number or email address"
            required
            onChange={signupInputValueModifier}
          />

          <input
            type="text"
            name="name"
            data-testid="name-input"
            placeholder="Full Name"
            required
            onChange={signupInputValueModifier}
          />

          <input
            type="username"
            name="username"
            data-testid="username-input"
            placeholder="Uername"
            required
            onChange={signupInputValueModifier}
          />

          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Password"
            required
            onChange={signupInputValueModifier}
          />
          <button type="submit">Sign Up</button>

          <p>
            By signing up, you agree to our <strong>Terms</strong>,
            <strong>Data Policy</strong> and <strong>Cookie Policy.</strong>
          </p>
        </form>
        <div className={styles.bottom}>
          <p>
            Don't have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
