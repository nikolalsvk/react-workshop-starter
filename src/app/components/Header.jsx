import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../_context/AppContext'

const Header = props => (
    <header>
        <nav className="red darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo card-title">
                        {props.title}
                    </Link>
                    <AppContext.Consumer>
                        {state => (
                            <ul className="right">
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <a
                                        onClick={e => {
                                            state.onChangeLayout()
                                        }}
                                    >
                                        <i className="material-icons">view_module</i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={e => {
                                            state.onThemeLayout()
                                        }}
                                    >
                                        <i className="material-icons">wb_incandescent</i>
                                    </a>
                                </li>
                            </ul>
                        )}
                    </AppContext.Consumer>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
