import React from 'react';
import { ProductProps } from '../../../types/Product';

export const ProductListTableRow =(props: ProductProps) => {
  return (
      <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
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
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span className="relative">In Stock</span>
              </span>
          </td>
      </tr>
  );
};
