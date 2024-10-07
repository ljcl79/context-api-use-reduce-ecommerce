import { Heart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="font-bold text-xl text-blue-600">
                            Mi Tienda
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link
                            to="/favorites"
                            className="flex items-center text-gray-600 hover:text-blue-600"
                        >
                            <Heart className="w-6 h-6 mr-2" />
                            Favoritos
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar