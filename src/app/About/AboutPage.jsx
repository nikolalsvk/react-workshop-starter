import React from 'react'
import AppContext from '../_context/AppContext'

const AboutPage = () => {
    return (
        <AppContext.Consumer>
            {state => {
                const itemClass = state.isGrid ? 'col s12 m6' : 'col s12'
                return (
                    <div className="row ">
                        <h1>This is About page</h1>
                        <div className={itemClass}>
                            <p className="flow-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in
                                veritatis dolorum doloremque nisi accusamus nostrum, enim qui,
                                beatae assumenda fugiat quis dolore voluptatem aperiam possimus hic!
                                Eveniet, id aliquam.
                            </p>
                        </div>
                        <div className={itemClass}>
                            <p className="flow-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in
                                veritatis dolorum doloremque nisi accusamus nostrum, enim qui,
                                beatae assumenda fugiat quis dolore voluptatem aperiam possimus hic!
                                Eveniet, id aliquam.
                            </p>
                        </div>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default AboutPage
