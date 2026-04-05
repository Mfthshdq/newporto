import { useState } from "react";
import style from "./Projects.module.css"

function Projects() {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({ title: "", desc: "" });

    const data = {
        A: {
            title: "Al - Point",
            desc: "AL Point merupakan platform berbasis web yang dirancang untuk memberikan sistem reward kepada pengguna melalui mekanisme poin. Pengguna dapat memperoleh poin dari berbagai aktivitas, seperti menyelesaikan tugas, tidak pernah meninggalkan sholat, mengikuti event, atau berpartisipasi dalam program tertentu. Poin yang terkumpul dalam 2 semester kemudian dapat ditukarkan dengan berbagai reward seperti Sertifikat, Piala, atau hadiah lainnya."
        },
        B: {
            title: "Al - Market",
            desc: "AL Market merupakan platform e-commerce yang dirancang untuk memudahkan pengguna dalam melakukan pembelian dan penjualan produk. Platform ini menyediakan berbagai fitur seperti pencarian produk, keranjang belanja, dan sistem pembayaran yang aman."
        },
        C: {
            title: "W4Learn",
            desc: "W4Learn adalah platform pembelajaran online yang menyediakan berbagai kursus dan materi pembelajaran untuk membantu pengguna meningkatkan keterampilan mereka dalam berbagai bidang. Platform ini menawarkan berbagai fitur seperti video pembelajaran, kuis interaktif, dan forum diskusi untuk mendukung proses pembelajaran pengguna."
        }
    };

    const openModal = (type) => {
        setContent (data[type]);
        setShow(true);
    };

    return (
        <div className={style.container}>
            <h1>My <span style={{ color: "#ff4c60" }}>Projects</span></h1>

            <div className={style.marquee}>
                <p>Welcomeee! Brothers and Sisters to My Portofolio Web - HAVE A NICE DAY! ENJOY -</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
                <p>Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee! Welcomeee!</p>
            </div>

            <div className={style.cards}>
                <div className={style.card}>
                    <img src="image/projects/al-point.png" alt="Project 1" className={style.projectImage}></img>
                    <h1>Al - Point</h1>
                    <button className={style.learnMoreButton} onClick={() => openModal("A")}>Learn More</button>
                </div>

                <div className={style.card}>
                    <img src="image/projects/al-market.png" alt="Project 2" className={style.projectImage}></img>
                    <h1>Al - Market</h1>
                    <button className={style.learnMoreButton} onClick={() => openModal("B")}>Learn More</button>
                </div>

                <div className={style.card}>
                    <img src="image/projects/w4learn.png" alt="Project 3" className={style.projectImage}></img>
                    <h1>W4Learn</h1>
                    <button className={style.learnMoreButton} onClick={() => openModal("C")}>Learn More</button>
                </div>
            </div>

            <footer className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </footer>

            {show && (
                <div className={style.modal}>
                    <div className={style.box}>
                        <span className={style.close} onClick={() => setShow(false)}>
                            &times;
                        </span>
                        <h2>{content.title}</h2>
                        <p>{content.desc}</p>
                    </div>
                </div>
            )
            }

        </div >
    )
}

export default Projects;