import React, { useEffect, useState } from 'react';
import { ProductInformationCard } from '../../components/products/CustomerPortal/ProductInformationCard';
import { useGlobalState } from '../../GlobalState';
import { getProductInformation } from '../../Services/useProductsService';

export const ProductInformation = () => {

    const [productData, setProductData] = useState([]);

    const id = useGlobalState('selectedProduct');

    return (
        <>
        <ProductInformationCard id={id[0]} />; 
        </>
    );
};
