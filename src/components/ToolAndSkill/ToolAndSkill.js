import style from "./ToolAndSkill.module.css"

function ToolAndSkill() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Tools and <span style={{ color: "#ff4c60" }}>Skills</span></h1>

            <div className={style.toolAndSkillList}>

                <div className={style.toolskills}>
                    <div className={style.tools}>
                        <img src="image/toolsandskills/canva.png" alt="Tool/Skill" className={style.tool} />
                    </div>
                    <h1><span style={{ color: "#ff4c60" }}>C</span>anva</h1>
                </div>

                <div className={style.toolskills}>
                    <div className={style.tools}>
                        <img src="image/toolsandskills/html.png" alt="Tool/Skill" className={style.tool} />
                    </div>
                    <h1><span style={{ color: "#ff4c60" }}>H</span>TML</h1>
                </div>

                <div className={style.toolskills}>
                    <div className={style.tools}>
                        <img src="image/toolsandskills/react.png" alt="Tool/Skill" className={style.tool} />
                    </div>
                    <h1>R<span style={{ color: "#ff4c60" }}>E</span>ACT</h1>
                </div>

                <div className={style.toolskills}>
                    <div className={style.tools}>
                        <img src="image/toolsandskills/laravel.png" alt="Tool/Skill" className={style.tool} />
                    </div>
                    <h1><span style={{ color: "#ff4c60" }}>L</span>aravel</h1>
                </div>

                <div className={style.toolskills}>
                    <div className={style.tools}>
                        <img src="image/toolsandskills/css.png" alt="Tool/Skill" className={style.tool} />
                    </div>
                    <h1>C<span style={{ color: "#ff4c60" }}>S</span>S</h1>
                </div>

                <div className={style.toolskills}>
                    <div className={style.tools}>
                        <img src="image/toolsandskills/figma.png" alt="Tool/Skill" className={style.tool} />
                    </div>
                    <h1>Figm<span style={{ color: "#ff4c60" }}>A</span></h1>
                </div>

            </div>
            <div className={style.marquee}>
                <p>ANJAYYYYY GG GA CELLL!</p>
                <p>GG KAN WKWKWKWK</p>
                <p>GASI KYAKNYA B AJA HAHAHAHA</p>
            </div>

        </div>
    )
}

export default ToolAndSkill;