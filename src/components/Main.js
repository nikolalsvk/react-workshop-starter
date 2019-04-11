import React from 'react'
import { Route } from 'react-router-dom'

import PostList from './PostList'
import About from './About'

const Main = props => {
    return (
        <main className="container">
            <Route path="/about" component={About} />
            <Route exact path="/" render={() => <PostList isGrid={props.isGrid} />} />
        </main>
    )
}

export default Main
