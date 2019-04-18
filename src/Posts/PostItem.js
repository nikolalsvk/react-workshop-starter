import React, { useContext, useState } from 'react'
import GridContext from '../context/GridContext'

const PostItem = ({ post }) => {
    const [selected, setSelected] = useState(false)
    const [selectedCount, setSelectedCount] = useState(0)
    const { isGrid, isLight } = useContext(GridContext)

    const title = isGrid ? post.shortTitle : post.title
    const body = isGrid ? post.shortBody : post.body
    const itemStyle = isLight ? 'white' : 'blue-grey darken-1'
    const textStyle = isLight ? 'black-text' : 'white-text'
    const selectedStyle = selected ? 'red' : ''

    const selectCard = event => {
        event.preventDefault()
        setSelected(selected => !selected)
        setSelectedCount(count => count + 1)
    }

    return (
        <div className={`col s12 ${isGrid ? 'm4' : ''}`}>
            <div className={`card ${itemStyle} ${selectedStyle}`}>
                <div className={`card-content ${textStyle}`}>
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
                <div className={`card-action ${selectedStyle}`}>
                    <a href="/" onClick={selectCard}>
                        Select (clicked {selectedCount})
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PostItem
