import React, { useState, useEffect } from 'react'
import PostList from './PostList'
import PostService from '../services/PostService'

const PostsPage = ({ isGrid }) => {
    const [posts, setPosts] = useState([])

    const loadPosts = async () => {
        const posts = await PostService.fetchPosts()
        setPosts(posts)
    }
    useEffect(() => {
        loadPosts()
    }, [])

    return (
        <div>
            <h1>Posts page</h1>
            <PostList posts={posts} />
        </div>
    )
}

export default PostsPage
