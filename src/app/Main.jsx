import React from 'react'
import { Route } from 'react-router-dom'

import AboutPage from './About/AboutPage'
import PostsPage from './Posts/PostsPage'
import PostsPageHooks from './Posts/PostsPageHooks'

const Main = () => {
    return (
        <main className="container">
            <Route path="/about" component={AboutPage} />
            <Route exact path="/" component={PostsPageHooks} />
        </main>
    )
}

export default Main
