import React, { useMemo } from 'react'

const ProductFilters = ({ products, maxPrice, onChangeCategory, onChangePrice }) => {
    console.log("Aplicando filtros")
    const categories = useMemo(() => {
        console.log('Cargando categorias');
        return [...new Set(products.map((product) => product.category))]
    }, []);

    const priceRange = useMemo(() => {
        console.log('Calculando precios');
        const prices = [...new Set(products.map((product) => product.price))];
        return {
            min: Math.floor(Math.min(...prices)),
            max: Math.ceil(Math.max(...prices)),
        }
    }, []);



    return (
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Categoría:</label>
                <select onChange={(e) => onChangeCategory(e.target.value)} className="w-full p-2 border rounded"
                >
                    <option value="">Todas</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2">
                    Rango de precios: ${priceRange.min} - ${priceRange.max}
                </label>
                <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => onChangePrice(e.target.value)}
                    className="w-full"
                />
                <label className="block text-sm font-medium mb-2">
                    Precio máximo actual: ${maxPrice}
                </label>
            </div>
        </div>
    )
}

export default ProductFilters