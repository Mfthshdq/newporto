import { Link } from 'react-router-dom';
import style from './Portofolio.module.css';
const JPG_FILE_URL = 'http://localhost:3000/CV Muhammad Miftahusshiddiq.jpg';

function Portofolio() {
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop()
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        link.remove();
    };

    return (
        <div className={style.app}>

            <div className={style.hero}>
                <h1>Hi, I'm <span>Muhammad Miftahusshiddiq</span></h1>
                <p>Frontend Developer • React Enthusiast</p>
                <button className={style.btn} onClick={() => { downloadFileAtURL(JPG_FILE_URL) }}>Download CV</button>
            </div>

            <div className={style.projects}>
                <h1>My <span style={{ color: '#ff4c60' }}>Projects</span></h1>

                <div className={style.project_list}>
                    <Link to="/website-portofolio" className={style.card}>
                        <h3>Portfolio Website</h3>
                        <p>Website portofolio modern dengan React</p>
                    </Link>

                    <Link to="/landingpage-portofolio" className={style.card}>
                        <h3>Landing Page</h3>
                        <p>Landing page responsive untuk bisnis</p>
                    </Link>
                </div>
            </div>

            <footer className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </footer>

        </div>
    );
}

export default Portofolio;