import styles from "./login.module.scss";

import Logo from "../../assets/images/instagram-logo.png";

const Login: React.FC = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <div className={styles.main}>
          <img src={Logo} alt="" />
          <form action="">
            <div>
              <input
                type="email"
                data-testid="email-input"
                placeholder="Email"
                required
              />
              <input
                type="password"
                data-testid="password-input"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
