import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { createOrder } from '../../../Services/useOrderService';
import { getProductInformation, getProductQuentityInOutlet } from '../../../Services/useProductsService';
import { OrderCreateDto } from '../../../types/Product';

export type idProp = {
    id: number;
};

type productData = {
    id: number;
    name: string;
    description: string;
    price: number;
    url: string;
    quentity: number;
};

var a: productData = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    url: '',
    quentity: 0
};

export const ProductInformationCard = (props: idProp) => {
    const [productData, setProductData] = useState<productData>(a);
    const [productQuentity, setProductQuentity] = useState<number | undefined>(productData?.quentity);
    // const [productQuentity, setProductQuentity] = useState<number | undefined>(productData?.quentity);
    const [selectedOutlet, setSelectedOutlet] = useState('0');
    const [productId, setProductId] = useState('0');

    const [productCount, setProductCount] = useState(0);
    const [totalAmount, settotalAmount] = useState(0);
    const navigate = useNavigate();

    let index = props.id.toString();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        getProductInformation(index)
            .then((res: any) => {
                setProductData(res.data);
                setProductId(res.data.id);
                setProductQuentity(res.data.quentity);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        settotalAmount(productCount * productData?.price);
    }, [productCount]);

    const handleOutletChnage = async (event: React.FormEvent) => {
        var a = (event?.target as any).value;
        // debugger;
        let qty = await getProductQuentityInOutlet(index, a);
        setProductQuentity(qty);
        setSelectedOutlet(a);
    };

    const handleDecrement = () => {
        if (productCount > 0) {
            setProductCount(productCount - 1);
        }
    };

    const handleIncreament = () => {
        if (productCount < productData?.quentity) {
            setProductCount(productCount + 1);
        }
    };

    const handleOrderProcess = () => {
        var data: OrderCreateDto = {
            outletId: parseInt(selectedOutlet),
            productId: props.id,
            userId: user.ID,
            product_Order_Qty: productCount,
            totalAmount: totalAmount
        };
        createOrder(data)
            .then(function () {
                alert('order is sucess');
            })
            .catch(function (response) {
                alert('somthing went wrong');
                navigate('/');
            });
    };

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 p-5 mx-auto flex flex-wrap shadow shadow-sky-700">
                    <img alt="ecommerce" src={productData?.url} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 pb-7">{productData?.name}</h1>
                        <p className="leading-relaxed">{productData?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex items-center">
                                <span className="mr-3">Select Outlet</span>
                                <div className="relative">
                                    <select
                                        value={selectedOutlet}
                                        onChange={(e) => {
                                            //setSelectedOutlet(e.target.value);
                                            handleOutletChnage(e);
                                        }}
                                        defaultValue={0}
                                        className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-sky-700 text-base pl-3 pr-10"
                                    >
                                        <option value="0">--</option>
                                        <option value="1">Colombo</option>
                                        <option value="2">Kurunegala</option>
                                        <option value="3">Kandy</option>
                                        <option value="4">Anuradapura</option>
                                    </select>

                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>

                                <span className="ml-3">Available Quentity : {productQuentity}</span>
                            </div>
                        </div>

                        <div className="flex">
                            <span className="title-font font-medium text-2xl  text-gray-900">RS. {productData?.price}.00</span>
                        </div>
                        <h1 className="text-gray-700 font-bold text-xl">Total price : {totalAmount}</h1>
                        <div className="flex pt-5">
                            <button onClick={() => handleDecrement()} className="px-5  h-12 bg-sky-500  text-white text-xs font-bold  rounded">
                                <h1 className="text-2xl">-</h1>
                            </button>
                            <h3 className="py-2 px-5 text-2xl">{productCount}</h3>
                            <button onClick={() => handleIncreament()} className="px-5  h-12 bg-sky-500  text-white text-xs font-bold  rounded">
                                <h1 className="text-2xl">+</h1>
                            </button>
                            {user && (
                                <button
                                    onClick={() => {
                                        handleOrderProcess();
                                    }}
                                    className="flex ml-auto text-white text-xl bg-blue-500 border-0 py-2 mt-3 px-6 focus:outline-none hover:bg-sky-700 rounded"
                                >
                                    Buy Now
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
