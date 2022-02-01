import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Services/useProductsService';
import { ProductCard } from '../../components/products/ProductCard';
import ProductSearch from '../../components/products/ProductSearch';

export const ProductList = () => {
    const [productData, setProductData] = useState([]);
    // const service = useProductsService();

    useEffect(() => {
        // Update the document title using the browser API
        getProducts().then((res) => setProductData(res.data));
    }, []);

    return (
        <>
            <div className=" p-5 m-auto justify-center">
                <ProductSearch />
            </div>
            <div className="grid grid-cols-4 gap-4 justify-around">
                {productData.map(function (data, name) {
                    return <ProductCard key={name} productData={data} />;
                })}
            </div>
        </>
    );
};
