import styles from "./signup.module.scss";

import Logo from "assets/images/instagram-logo-black.png";

const Signup = () => {
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
            onChange={loginInputValueModifier}
          />

          <input
            type="text"
            name="name"
            data-testid="name-input"
            placeholder="Full Name"
            required
            onChange={loginInputValueModifier}
          />

          <input
            type="username"
            name="username"
            data-testid="username-input"
            placeholder="Uername"
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
