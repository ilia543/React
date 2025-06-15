import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App1 from './App1'
// import App2 from './App2'
import App3 from './App3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    {/* <App2 /> */}
    <App3 />
  </StrictMode>,
)
