import React, { useContext, useState } from 'react'

import AppContext from '../_context/AppContext'

const PostListItem = ({ post }) => {
    const { isGrid, isLight } = useContext(AppContext)

    const [selected, setSelected] = useState(false)
    const [count, setCount] = useState(0)

    const cardSize = isGrid ? 'm4' : ''
    const cardStyle = isLight ? 'white' : 'blue-grey darken-1'
    const textStyle = isLight ? '' : 'white-text'

    return (
        <div className={`col s12 ${cardSize}`}>
            <div className={`card ${cardStyle}`}>
                <div className={`card-content ${textStyle}`}>
                    <span className="card-title">{isGrid ? post.shortTitle : post.title}</span>
                    <p>{isGrid ? post.shortBody : post.body}</p>
                </div>
                <div className={`card-action ${selected ? 'red' : ''}`}>
                    <a
                        onClick={() => {
                            setSelected(!selected)
                            setCount(count + 1)
                        }}
                    >
                        Select card ( click count: {count} )
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PostListItem
