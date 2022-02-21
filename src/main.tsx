import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'

import './i18n'

import './styles/index.css'

function App() {
  return useRoutes(routes)
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
