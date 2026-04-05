import { Link } from 'react-router-dom';
import style from './Navbar.module.css';


function Navbar() {
    return (
        <div className={style.homepage}>
            <header className={style.header}>
                <h1 className={style.logo}>MSHDQ</h1>
                <nav className={style.nav}>
                    <Link to="/" className={style.link}>HOME</Link>
                    <Link to="/about" className={style.link}>ABOUT</Link>
                    <Link to="/service" className={style.link}>SERVICE</Link>
                    <Link to="/portofolio" className={style.link}>PORTOFOLIO</Link>
                    <Link to="/toolsandskills" className={style.link}>TOOLS & SKILLS</Link>
                    <Link to="/contact" className={style.link}>CONTACT</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;