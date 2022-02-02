import { Link, useNavigate } from 'react-router-dom';
import { ProductProps } from '../../../types/Product';
import { setGlobalState, useGlobalState } from '../../../GlobalState';


export const ProductCard = (props: ProductProps) => {
    const navigate = useNavigate();

    const buttonHandler = () => {
        setGlobalState('selectedProduct', props.productData.id);
        navigate('/product-information');
    };

    return (
         <div onClick={() => buttonHandler()}>
         {/* <div onClick={() => navigate('/product-information/' + props.productData.id)}>  */}
            {/* <Link to={`/view-products/id=${props.product.id}`}> */}
            <div z-index="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 shadow-xl hover:shadow-blue-200 hover:cursor-pointer">
                <div>
                    <img alt="product image" src={props.productData.url} z-index="0" className="focus:outline-none w-full h-44" />
                </div>
                <div className="bg-white">
                    <div className="flex items-center justify-between px-4 pt-4">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                z-index="0"
                                className="focus:outline-none"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                            </svg>
                        </div>
                        <Link to={`/`}>
                            <div className="bg-blue-500  items-center py-1.5 px-6 rounded-md hover:shadow-lg">
                                <p z-index="100" className="focus:outline-none text-xs text-white">
                                    Buy Now
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center">
                            <h2 z-index="0" className="focus:outline-none text-lg font-semibold">
                                {props.productData.name}
                                {/* Get the product name from props */}
                            </h2>
                            <p z-index="0" className="focus:outline-none text-xs text-gray-600 pl-5">
                                4 days ago
                            </p>
                        </div>
                        <p z-index="0" className="focus:outline-none text-xs text-gray-600 mt-2">
                            {props.productData.description}
                        </p>
                        <div className="flex mt-4">
                            <div>
                                <p z-index="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                    12 months warranty
                                </p>
                            </div>
                            <div className="pl-2">
                                <p z-index="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                    Complete box
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-4">
                            <h2 z-index="0" className="focus:outline-none text-indigo-700 text-sm font-semibold hover:text-sky-700">
                                See more...
                            </h2>
                            <h3 z-index="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};