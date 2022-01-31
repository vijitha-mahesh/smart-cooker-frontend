import { ProductCard } from './ProductCard';

export const ProductList = () => {
    const productData2 = [
        {
            name: 'Rice Cooker',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468532/SMARTcooker/oven.jpg'
        },

        {
            name: 'Rice Cooker',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468451/SMARTcooker/riceCooker.jpg'
        },
        {
            name: 'Spoon Set',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468428/SMARTcooker/spoonSet.jpg'
        },
        {
            name: 'Gas Cooker',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468392/SMARTcooker/gasCooker.jpg'
        },
        {
            name: 'Blender',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468315/SMARTcooker/blender.jpg'
        },
        {
            name: 'Toster',
            description:
                '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugiat nam quidem blanditiis provident itaque rerum. Non, veritatis esse, ex alias rerum ipsum iure consequuntur ipsa amet, pariatur reprehenderit accusamus.',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468648/SMARTcooker/toster.webp'
        }
    ];

    return (
        <div className="grid grid-cols-4 gap-4 justify-around">
            {productData2.map(function (data, name) {
                return <ProductCard key={name} productData={data} />;
            })}
        </div>
    );
};
