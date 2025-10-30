import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FourCsFramework_Integrated from "./FourCsFramework_edit.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FourCsFramework_Integrated />
  </StrictMode>,
)
