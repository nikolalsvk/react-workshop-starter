import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import './index.css'
import 'materialize-css/dist/css/materialize.css'

import App from './app/App'
import AppStore from './app/AppStore'

ReactDOM.render(
    <HashRouter>
        <AppStore>
            <App />
        </AppStore>
    </HashRouter>,
    document.getElementById('root')
)
