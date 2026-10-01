import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SeacherProvider } from './context/SearcherProvider.jsx'
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/bangers/400.css"

createRoot(document.getElementById('root')).render(
  <SeacherProvider>
    <App />
  </SeacherProvider>
)
