import React, { useCallback, useContext, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { StoreContext } from '../context/StoreContext';
import ProductFilters from '../components/ProductFilters';

const Home = () => {
    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState(100);
    //Consumirlo
    const { state } = useContext(StoreContext);


    const handleCategoryChange = useCallback((category) => {
        setCategory(category);
    }, []);

    const handlePriceChange = useCallback((price) => {
        setMaxPrice(price);
    }, []);

    if (state.loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg">Cargando productos...</div>
            </div>
        );
    }

    const filteredProducts = state.products.filter((product) => {
        const matchesCategory = !category || product.category === category;
        const matchesPrice = product.price <= maxPrice;
        return matchesCategory && matchesPrice;
    })

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Nuestros Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                    <ProductFilters products={state.products}
                        maxPrice={maxPrice}
                        onChangeCategory={handleCategoryChange}
                        onChangePrice={handlePriceChange}></ProductFilters>
                </div>

                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home