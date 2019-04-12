import React, { useContext } from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'
import AppContext from './_context/AppContext'

const App = () => {
    const store = useContext(AppContext)

    const style = store.isLight ? 'root white' : 'root blue-grey'
    return (
        <div className={style}>
            <Header title="App" />
            <Main />
            <Footer />
        </div>
    )
}

export default App
