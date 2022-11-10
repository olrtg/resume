import React from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routes from '~react-pages'

import './i18n'

import './styles/index.css'

function App() {
  return useRoutes(routes)
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
