import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Services/useProductsService';
import { ProductCard } from '../../components/products/CustomerPortal/ProductCard';
import { useGlobalState } from '../../GlobalState';
import SelectOutlet from '../../components/SelectOutlet/SelectOutlet';
import { OutletProps } from '../../types/Outlet';
import { getOutlets } from '../../Services/useOutletsService';

export const ProductList = () => {
    const [productData, setProductData] = useState([]);
    const [selectedOutlet, setSelectedOutlet] = useState('0');
    const [outlets, setOutlets] = useState<OutletProps[]>([]);

    useEffect(() => {
        getProducts(0).then((res) => {
            setProductData(res.data);
        });
        getOutlets().then((res) => setOutlets(res.data));
    }, []);

    const handleOutletChnage = (event: React.FormEvent) => {
        var a = (event?.target as any).value;

            getProducts(a).then((res) => {
                setProductData(res.data);
            });
        
    };

    return (
        <>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                    <span className="mr-3">Outlet</span>
                    <select
                        value={selectedOutlet}
                        onChange={(e) => {
                            setSelectedOutlet(e.target.value);
                            handleOutletChnage(e);
                        }}
                        defaultValue={0}
                        className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10"
                    >
                        <option value="0">In all Outlet</option>
                        {outlets.map(function (data) {
                            return <option value={data.id}>{data.name}</option>;
                        })}
                    </select>
                </div>
            </div>
            <div className=" p-5 m-auto justify-center"></div>

            <div className="grid  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
                {productData.map(function (data, name) {
                    return <ProductCard key={name} productData={data} />;
                })}
            </div>
        </>
    );
};
