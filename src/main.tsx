import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import ItemAdd from './components/Itemadd'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='p-2 min-h-screen bg-amber-200 flex-col items-center justify-center'>
      <div className='bg-amber-50 max-w-500px justify-center items-center w-[90%] p-4 rounded-md shadow-md '>
        <Header />
        <ItemAdd />
      </div>
    </div>

  </StrictMode>,
)
