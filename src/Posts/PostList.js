import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts }) => {
    if (posts.length === 0) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="row">
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList
