import React from 'react'

import './App.css'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Store from './Store'

class App extends React.Component {
    render() {
        return (
            <Store>
                <Header title="App" />
                <Main />
                <Footer />
            </Store>
        )
    }
}

export default App
