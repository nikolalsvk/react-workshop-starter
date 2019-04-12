import React, { useState, useEffect } from 'react'
import PostsList from './PostList'
import { postsService } from '../../services/postsService'

const PostsPageHooks = props => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // ccomponentDidMount
        // ccomponentDidUpdate
        postsService.fetchPosts().then(posts => {
            setPosts(posts)
        })
    }, [])

    if (posts.length === 0) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="row">
            <PostsList posts={posts} />
        </div>
    )
}

export default PostsPageHooks
