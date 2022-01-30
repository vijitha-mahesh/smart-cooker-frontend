import { ProductCard } from "./ProductCard";


export const ProductList = () => {

    const productData2 = [
        {
            name: 'Rice Cooker',
            description: 'Its a fucking good rice cooker',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468532/SMARTcooker/oven.jpg'
        },
        {
            name: 'Rice Cooker',
            description: 'Get this and blender whatever',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468451/SMARTcooker/riceCooker.jpg'
        },
        {
            name: 'Spoon Set',
            description: 'blaaaaaaaaaaaaaaaaaaaaaaaaaa',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468428/SMARTcooker/spoonSet.jpg'
        },
        {
            name: 'Gas Cooker',
            description: 'Hell yeah its working',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468392/SMARTcooker/gasCooker.jpg'
        },
        {
            name: 'Blender',
            description: 'Its a fucking good rice cooker',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468315/SMARTcooker/blender.jpg'
        },
        {
            name: 'Toster',
            description: 'Its a fucking good rice cooker',
            url: 'https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468648/SMARTcooker/toster.webp'
        }
    ];

    return (
        <div className="grid grid-cols-4 gap-4 ">
            {productData2.map(function (data, name) {
                return <ProductCard key={name} productData={data}/>;
            })}
        </div>
    );
};
