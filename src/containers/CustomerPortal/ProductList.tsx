import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Services/useProductsService';
import { ProductCard } from '../../components/products/CustomerPortal/ProductCard';
import ProductSearch from '../../components/products/CustomerPortal/ProductSearch';

export const ProductList = () => {
    const [productData, setProductData] = useState([]);
    // const service = useProductsService();

    useEffect(() => {
       // console.log("use effect function start");
        // Update the document title using the browser API
          getProducts().then((res) => setProductData(res.data));
      //  getProducts().then((res) => console.log('print of res of data ' +res.data));
    }, []);

  //  console.log(productData + ' response product data');

    return (
        <>
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
