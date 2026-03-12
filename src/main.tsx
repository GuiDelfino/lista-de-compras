import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import ItemAdd from './components/Itemadd'
import ListShop from './components/ListShop'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex items-center justify-center bg-[#93ba85] h-screen'>
      <div className='bg-[#fcf6d2]  justify-center items-center max-w-7xl p-10 rounded-md shadow-md '>
        <Header />
        <ItemAdd />
        <ListShop />
      </div>
    </div>

  </StrictMode>,
)
