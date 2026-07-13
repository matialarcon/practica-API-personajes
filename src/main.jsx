import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SeacherProvider } from './context/SearcherProvider.jsx'

createRoot(document.getElementById('root')).render(
  <SeacherProvider>
    <App />
  </SeacherProvider>
)
