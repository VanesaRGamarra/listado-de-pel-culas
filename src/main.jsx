import React from 'react'
import ReactDOM from 'react-dom/client'
import { Listado, Movie } from './components/Movie'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Listado />
  </React.StrictMode>,
)
