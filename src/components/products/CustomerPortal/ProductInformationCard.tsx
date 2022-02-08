import { useContext, useEffect, useState } from 'react';
import {AuthContext} from '../../../contexts/AuthContext';
import { getProductInformation } from '../../../Services/useProductsService';

export type idProp = {
    id: number;
};

type productData = {
    id: number;
    name: string;
    description: string;
    url: string;
};

export const ProductInformationCard = (props: idProp) => {
    
    const [productData2, setProductData] = useState<productData | null>(null);

    let index = props.id.toString();

       const { user, dispatch } = useContext(AuthContext);

    useEffect(() => {
        console.log(index + 'index');

        getProductInformation(index)
            .then((res: any) => {
                // console.log(res);
                setProductData(res.data);
            })
            .catch((err) => {
                // console.log(err);
            });
    }, []);
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 p-5 mx-auto flex flex-wrap shadow shadow-sky-700">
                    <img alt="ecommerce" src={productData2?.url} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 pb-7">{productData2?.name}</h1>
                        <p className="leading-relaxed">{productData2?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Outlet</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10">
                                        <option>Colombo</option>
                                        <option>Kurunegala</option>
                                        <option>Kandy</option>
                                        <option>Anuradapura</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl  text-gray-900">RS. 3000.00</span>
                            {user && <button className="flex ml-auto text-white text-xl bg-blue-500 border-0 py-2 mt-3 px-6 focus:outline-none hover:bg-sky-700 rounded">Buy Now</button>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
