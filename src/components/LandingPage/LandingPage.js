import { useState } from "react";
import style from "./LandingPage.module.css"

function LandingPage() {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({ title: "", desc: "" });

    const data = {
        A: {
            title: "W4Learn",
            desc: "Selamat datang di tempat terbaik buat kamu yang doyan ngemil! Di sini, kamu bisa menemukan berbagai pilihan makanan ringan favorit — mulai dari yang manis, gurih, sampai yang lagi viral. Gak cuma itu, kita juga punya berbagai minuman segar yang siap nemenin waktu santaimu. Jadi, tunggu apa lagi? Ayo, jelajahi menu kita dan temukan camilan serta minuman yang bakal bikin harimu makin seru!"
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
        setContent(data[type]);
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
                    <img src="image/projects/warskuy.png" alt="Project 1" className={style.projectImage}></img>
                    <h1>WarSkuy</h1>
                    <button className={style.learnMoreButton} onClick={() => openModal("A")}>Learn More</button>
                </div>
            </div>

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

            <footer className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </footer>
        </div>
    )
}

export default LandingPage;