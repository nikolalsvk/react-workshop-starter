import React, { Component } from 'react'
import PostsList from './PostList'
import { postsService } from '../../services/postsService'

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postsService.fetchPosts().then(posts => {
            console.log(posts)
            this.setState({
                posts
            })
        })
    }

    render() {
        if (this.state.posts.length === 0) {
            return <h4>Loading...</h4>
        }

        return (
            <div className="row">
                <PostsList posts={this.state.posts} />
            </div>
        )
    }
}

export default PostPage
