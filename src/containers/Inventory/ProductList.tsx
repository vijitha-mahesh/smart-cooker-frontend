import React, { useEffect, useState } from 'react';
import { getProducts } from '../../Services/useProductsService';
import { ProductCard } from '../../components/Inventory/ProductCard';

export const ProductList = () => {
    const productData2 = [
        {
            id: 1,
            name: 'Rice Cooker',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468532/SMARTcooker/oven.jpg'
        },

        {
            id: 2,
            name: 'Rice Cooker',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468451/SMARTcooker/riceCooker.jpg'
        },
        {
            id: 3,
            name: 'Spoon Set',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468428/SMARTcooker/spoonSet.jpg'
        },
        {
            id: 3,
            name: 'Gas Cooker',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468392/SMARTcooker/gasCooker.jpg'
        },
        {
            id: 4,
            name: 'Blender',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468315/SMARTcooker/blender.jpg'
        },
        {
            id: 5,
            name: 'Toster',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468648/SMARTcooker/toster.webp'
        }
    ];

     const [productData, setProductData] = useState([]);
    // const service = useProductsService();

    useEffect(() => {
        // Update the document title using the browser API
        getProducts().then((res) => setProductData(res.data));
    },[]);

    return (
        <div className="grid grid-cols-4 gap-4 justify-around">
            {productData.map(function (data, name) {
                return <ProductCard key={name} productData={data} />;
            })} 
        </div>
    );
};
