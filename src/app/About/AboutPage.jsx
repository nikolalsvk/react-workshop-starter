import React, { useContext } from 'react'
import AppContext from '../_context/AppContext'

const AboutPage = () => {
    const { isGrid, isLight } = useContext(AppContext)

    const itemClass = isGrid ? 'col s12 m6' : 'col s12'
    const fontStyle = isLight ? 'flow-text' : 'flow-text white-text'

    return (
        <div className="row ">
            <h1>This is About page</h1>
            <div className={itemClass}>
                <p className={fontStyle}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis
                    dolorum doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat
                    quis dolore voluptatem aperiam possimus hic! Eveniet, id aliquam.
                </p>
            </div>
            <div className={itemClass}>
                <p className={fontStyle}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis
                    dolorum doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat
                    quis dolore voluptatem aperiam possimus hic! Eveniet, id aliquam.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
