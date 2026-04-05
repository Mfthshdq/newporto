import { Link } from 'react-router-dom';
import style from './HomePage.module.css'


const HomePage = () => {
  return (
    <div className={style.homePage}>
      <section className={style.hero}>
        <div className={style.heroText}>
          <h1 className={style.welcome}>WELCOME!</h1>
          <h2>
            I Am <span className={style.highlight}>Frontend Developer</span>
          </h2>
          <p>
            I'm a Frontend Developer with extensive experience for over 5 years.
            My expertise is to create modern websites, UI/UX design, and more.
          </p>

          <div className={style.buttons}>
            <Link to="/service" className={`${style.btn} ${style.primary}`}>
              Hire Me
            </Link>
            <Link to="/portofolio" className={`${style.btn} ${style.secondary}`}>
              View Portofolio
            </Link>
          </div>

          {/* <div className={style.socials}>
            <FaInstagram />
            <FaWhatsapp />
            <FaFacebook />
          </div> */}
        </div>

        <div className={style.heroImage}>
          <div className={style.glow}></div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="profile"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
