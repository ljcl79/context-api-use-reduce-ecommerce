import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import ProductCard from '../components/ProductCard';

const Favorites = () => {

    const { state } = useContext(StoreContext);
    const favorites = state.products.filter((p) => p.isFavorite);

    if (favorites.length === 0) {
        return (
            <div className="p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Mis Favoritos</h1>
                <p>No tienes productos favoritos aún.</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Mis Favoritos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favorites.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Favorites