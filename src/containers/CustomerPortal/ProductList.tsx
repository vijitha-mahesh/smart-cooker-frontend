import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Services/useProductsService';
import { ProductCard } from '../../components/products/CustomerPortal/ProductCard';
import ProductSearch from '../../components/products/CustomerPortal/ProductSearch';
import { useGlobalState } from '../../GlobalState';
import SelectOutlet from '../../components/SelectOutlet/SelectOutlet';

export const ProductList = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProducts().then((res) => setProductData(res.data));
    }, [useGlobalState]);

    return (
        <>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                    <span className="mr-3">Outlet</span>
                    <SelectOutlet/>
                </div>
            </div>
            <div className=" p-5 m-auto justify-center">
                <ProductSearch />
            </div>

            <div className="grid  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
                {productData.map(function (data, name) {
                    return <ProductCard key={name} productData={data} />;
                })}
            </div>
        </>
    );
};
