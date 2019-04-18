import React, { useContext } from 'react'
import GridContext from '../context/GridContext'

const About = () => {
    const { isLight } = useContext(GridContext)
    const itemStyle = isLight ? 'white' : 'blue-grey darken-1'
    const textStyle = isLight ? 'flow-text black-text' : 'flow-text white-text'

    return (
        <div className={itemStyle}>
            <h1 className={textStyle}>This is About page</h1>
            <p className={textStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis dolorum
                doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat quis dolore
                voluptatem aperiam possimus hic! Eveniet, id aliquam.
            </p>
            <p className={textStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis dolorum
                doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat quis dolore
                voluptatem aperiam possimus hic! Eveniet, id aliquam.
            </p>
        </div>
    )
}

export default About
