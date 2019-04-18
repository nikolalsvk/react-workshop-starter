import { createContext } from 'react'

const GridContext = createContext({
    isLight: true,
    isGrid: false,
    onChangeView: () => {},
    onChangeLight: () => {}
})

export default GridContext
