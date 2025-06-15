import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Mains from './Mains.jsx'
// import Forms from './Forms.jsx'
// import Forms1 from './Forms1.jsx'
// import Forms2 from './Forms2.jsx'
// import Ifelsenireturnelements from './ifelsenireturnelements.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Mains />
    {/* <Forms /> */}
    {/* <Forms1 /> */}
    {/* <Forms2 /> */}
    {/* <Ifelsenireturnelements /> */}
  </StrictMode>,
)
