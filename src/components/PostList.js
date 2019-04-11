import React from 'react'
import Axios from 'axios'

class PostList extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        const requestUrl = 'https://jsonplaceholder.typicode.com/posts'
        Axios.get(requestUrl)
            .then(res => res.data)
            .then(posts => {
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
                {this.state.posts.map(post => {
                    return (
                        <div className={`col s12 ${this.props.isGrid ? 'm4' : ''}`}>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{post.title.slice(0, 20)}</span>
                                    <p>{post.body.slice(0, 50)}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PostList
