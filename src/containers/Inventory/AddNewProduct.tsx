import { useState } from 'react';
import { addProduct } from '../../Services/useProductsService';

interface AddNewProductProps { }

const AddNewProduct: React.FunctionComponent<AddNewProductProps> = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e: any, status: any) => {
        e.preventDefault();
        var data = {
            Pname: name,
            Pdescription: description,
            Purl: url
        };

        addProduct(data);
    };

    return (
        <div className="h-full w-full">
            <div className="pt-5 pb-5 mb-3">
                <h1 className="font-bold text-4xl text-center text-sky-700">Add New Product</h1>
            </div>
            <form>
                <div className="block w-1/2 shadow-md shadow-blue-500 m-auto p-10">
                    <div className="mb-6">
                        <label className="block mb-2 text-xl font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="Product-name"
                            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-xl font-medium text-gray-600">Description</label>
                        <input
                            type="text"
                            id="large-input"
                            name="description"
                            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-xl font-medium text-gray-600">URL</label>
                        <input
                            type="text"
                            id="large-input"
                            name="url"
                            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => {
                                setUrl(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            onClick={(e) => {
                                handleSubmit(e, 'post');
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddNewProduct;