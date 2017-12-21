import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const HMR = require('./App').default
    ReactDOM.render(
      <HMR />,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
