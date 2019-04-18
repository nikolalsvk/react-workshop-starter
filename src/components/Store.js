import React, { useState } from 'react'
import GridContext from '../context/GridContext'

const Store = ({ children }) => {
    const [isGrid, setIsGrid] = useState(false)
    const [isLight, setIsLight] = useState(true)

    const onChangeView = event => {
        event.preventDefault()
        setIsGrid(isGrid => !isGrid)
    }

    const onChangeLight = event => {
        event.preventDefault()
        setIsLight(isLight => !isLight)
    }

    return (
        <GridContext.Provider value={{ isLight, isGrid, onChangeView, onChangeLight }}>
            {children}
        </GridContext.Provider>
    )
}

export default Store
