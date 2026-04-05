import style from './About.module.css'

function About() {
    return (
        <div className={style.aboutpage}>

            <section className={style.about_section}>
                <h1>About Me</h1>
                <p>
                    Hallo! Saya <span className={style.highlight}>Muhammad Miftahusshiddiq</span>, seorang <span className={style.highlight}>Frontend Developer</span> dan <span className={style.highlight}>Web Developer</span> yang baru merintis dunia coding dengan lebih dari <span className={style.highlight}>2 Tahun</span> dalam membuat situs web modern, baik itu <span className={style.highlight}>Web E-Commerce</span> atau <span className={style.highlight}>Web Sekolah</span>.
                    <br /><br />
                    Saya ahli dalam <span className={style.highlight}>Web Design</span>, <span className={style.highlight}>Design Graphic</span>, dan <span className={style.highlight}>Pengembangan antarmuka pengguna</span>.
                    Saya berusaha menciptakan desain yang bersih dan elegan yang fungsional sekaligus menarik secara visual.
                    <br /><br />
                    Mari bekerja sama untuk mewujudkan ide digital Anda!
                </p>
            </section>

            <footer className={style.footer}>
                &copy; 2025 MSHDQ. All rights reserved.
            </footer>
        </div>
    )
}

export default About;