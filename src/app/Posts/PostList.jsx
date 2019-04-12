import React from 'react'

import PostListItem from './PostListItem'

const PostsList = props => {
    const { posts } = props

    return posts.map(post => <PostListItem key={post.id} post={post} />)
}

export default PostsList
