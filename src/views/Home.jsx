import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { StoreContext } from '../context/StoreContext';

const Home = () => {
    //Consumirlo
    const { state } = useContext(StoreContext);

    if (state.loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Cargando productos...</div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Nuestros Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {state.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home