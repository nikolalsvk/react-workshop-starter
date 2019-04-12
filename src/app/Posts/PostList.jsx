import React from 'react'
import AppContext from '../_context/AppContext'

const PostsList = props => {
    const { posts } = props

    return posts.map(post => (
        <AppContext.Consumer>
            {store => (
                <div className={`col s12 ${store.isGrid ? 'm4' : ''}`}>
                    <div className={`card ${store.isLight ? 'white' : 'blue-grey darken-1'}`}>
                        <div className="card-content">
                            <span className="card-title">{post.shortTitle}</span>
                            <p>{post.shortBody}</p>
                        </div>
                    </div>
                </div>
            )}
        </AppContext.Consumer>
    ))
}

export default PostsList
