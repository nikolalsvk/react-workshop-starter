import React from 'react'

import './App.css'

import AppStore from './AppStore'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './Main'
import AppContext from './_context/AppContext'

class App extends React.Component {
    render() {
        return (
            <AppStore>
                <AppContext.Consumer>
                    {store => {
                        const style = store.isLight ? 'root white' : 'root blue-grey'
                        return (
                            <div className={style}>
                                <Header title="App" />
                                <Main />
                                <Footer />
                            </div>
                        )
                    }}
                </AppContext.Consumer>
            </AppStore>
        )
    }
}

export default App
