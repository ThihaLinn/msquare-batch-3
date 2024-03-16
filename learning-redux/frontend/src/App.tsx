
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MenuPage from './pages/MenuPage'
import MenuCategory from './pages/MenuCategoryPage'
import SettingPage from './pages/SettingPage'


function App() {

  return (
   <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}></Route>
            <Route path='/menu' element={<MenuPage/>}></Route>
            <Route path='/menu-category' element={<MenuCategory/>}></Route>
            <Route path='/setting' element={<SettingPage/>}></Route>
        </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
