import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import AppColorOnChange from './AppColorOnChange.jsx'
// import AppColorOnClick from './AppColorOnClick.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AppColorOnChange /> */}
    {/* {<AppColorOnClick />} */}
  </StrictMode>,
)
