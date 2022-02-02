import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ProductListTableRow} from '../../../components/products/StaffPortal/ProductListTableRow';
import { getProducts } from '../../../Services/useProductsService';

export default function ProductsTable() {
    const [productData, setProductData] = useState([]);
       const navigate = useNavigate();
    // const service = useProductsService();

    useEffect(() => {
        // Update the document title using the browser API
        getProducts().then((res) => setProductData(res.data));
    }, []);
    

    return (
        <div className="p-8 rounded-md w-full ">
            <div>
                <div className=" flex items-center justify-between pb-6 ">
                    <div>
                        <h2 className="text-sky-700 text-4xl font-semibold pl-40">All Products</h2>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="lg:ml-40 ml-10 space-x-8">
                            <button onClick={() => navigate('/add-new-product')} className="bg-indigo-600 px-4 py-2 mr-16 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:shadow-lg">Create New Product</button>
                        </div>
                    </div>
                </div>
                <div className="flex ml-6 items-center p-5 pl-20">
                    <span className="mr-3 text-xl font-semibold">Select Outlet</span>
                    <div>
                        <select className="rounded border appearance-none border-sky-700 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10">
                            <option>Colombo</option>
                            <option>Kurunegala</option>
                            <option>Kandy</option>
                            <option>Anuradapura</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto m-1">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden pr-28 pl-28 pb-20">
                        <table className="min-w-full leading-normal shadow-lg shadow-sky-700 ">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Created at</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">QTY</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.map(function (data, name) {
                                    return <ProductListTableRow key={name} productData={data} />;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
