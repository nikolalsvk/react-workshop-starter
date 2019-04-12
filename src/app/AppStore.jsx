import React, { Component } from 'react'
import AppContext from './_context/AppContext'

class AppStore extends Component {
    state = {
        isGrid: false,
        isLight: true
    }

    onChangeLayout = () => {
        this.setState(prevState => ({
            isGrid: !prevState.isGrid
        }))
    }

    onThemeLayout = () => {
        this.setState(prevState => ({
            isLight: !prevState.isLight
        }))
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    isGrid: this.state.isGrid,
                    isLight: this.state.isLight,
                    onThemeLayout: this.onThemeLayout,
                    onChangeLayout: this.onChangeLayout
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppStore
