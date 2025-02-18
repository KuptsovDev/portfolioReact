import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/not_aicon.svg";
import sunIcon from "../../assets/not_aicon.svg";
import moonIcon from "../../assets/not_aicon.svg";
import twitterIcon from "../../assets/not_aicon.svg";
import CV from "../../assets/not_aicon.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sunIcon : moonIcon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Aleksandr Kuptsov"
        />
        <img
          className={styles.colorModeIcon}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <dev className={styles.info}>
        <h1>
          Aleksandr
          <br />
          Kuptsov
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </dev>
    </section>
  );
}

export default Hero;
