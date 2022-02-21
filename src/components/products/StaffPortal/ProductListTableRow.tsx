import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../../Services/useProductsService';
import { ProductProps } from '../../../types/Product';
import { AuthContext } from '../../../contexts/AuthContext';

export const ProductListTableRow = (props: ProductProps) => {
    const { user, dispatch } = useContext(AuthContext);

    const handleDeleteButton = () => {
        //console.log("delete : " + props.productData.id);
        deleteProduct(props.productData.id);
        window.location.reload();
    };

    return (
        <tr className="hover:cursor-pointer">
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center  ">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img alt="product image" src={props.productData.url} className="w-full h-full rounded-full" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">{props.productData.name}</p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{props.productData.description}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">43</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="bg-green-300 text-center p-2 rounded-full">
                    <p className="text-base">InStock</p>
                </div>
            </td>
            {user.Role == 'inventory_member' && (
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button onClick={() => handleDeleteButton()} className="bg-red-600 hover:shadow-lg hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                    </button>
                </td>
            )}
        </tr>
    );
};
