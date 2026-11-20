
import { Route, Routes } from 'react-router'
import './App.css'
import { Header } from './ui/blocks/Header'

import { Mainpage } from './ui/pages/mainPage'
import { Catalog } from './ui/pages/catalog'
function App() {
  

  return (
    <>
   
     
     <Routes>
      <Route path='/' element={<Mainpage/>}
      />
      <Route path='/catalog/' element={<Catalog/>}
     />
    </Routes>
        <footer>

        </footer>
    </>
  )
}

export default App
