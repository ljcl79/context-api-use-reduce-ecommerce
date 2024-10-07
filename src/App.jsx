import { Link, Route, Routes } from 'react-router-dom'
import { Heart } from 'lucide-react'
import ProductDetail from './views/ProductDetail'
import Favorites from './views/Favorites'
import Home from './views/Home'
import StoreContextProvider from './context/StoreContext'
import NavBar from './components/NavBar'

function App() {


  return (
    //Compartimos
    <StoreContextProvider>
      <div className="min-h-screen bg-gray-100">
        <NavBar></NavBar>
        <main className="max-w-7xl mx-auto py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </StoreContextProvider>
  )
}

export default App
