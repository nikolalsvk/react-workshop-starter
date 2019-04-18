import React from 'react'
import { Route } from 'react-router-dom'

import About from '../About/AboutPage'
import PostsPage from '../Posts/PostsPage'

const Main = () => (
    <main className="container">
        <Route path="/about" component={About} />
        <Route exact path="/" component={PostsPage} />
    </main>
)

export default Main
