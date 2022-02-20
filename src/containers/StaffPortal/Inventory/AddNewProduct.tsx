import { useState } from 'react';
import { addProduct } from '../../../Services/useProductsService';
import { storage } from '../../../firebase';
import { useNavigate } from 'react-router-dom';

interface AddNewProductProps {}

const AddNewProduct: React.FunctionComponent<AddNewProductProps> = () => {
    const navigate = useNavigate();

    var fileType = new File([''], '', {
        type: 'image'
    });

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const [quentity, setQuentity] = useState('');

    const [image, setImage] = useState<File>(fileType);

    const [progress, setProgress] = useState(0);
    const [IsProgressWindow, setIsProgressWindow] = useState(false);

    const handleImageUpload = (e: any) => {
        e.preventDefault();
        console.log('3 : came to Image upload');

        if (image) {
            console.log(image.name);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref('images')
                        .child(image.name)
                        .getDownloadURL()
                        .then((url) => {
                            setUrl(url);
                        });
                }
            );
        }
        console.log('URL :' + url);
    };

    const handleImageFieldChange = (e: any) => {
        console.log('1 : handle Image filed change');
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: any, status: any) => {
        e.preventDefault();
        var data = {
            name: name,
            description: description,
            price: price,
            quentity: quentity,
            url: url
        };
        await handleImageUpload(e);
        // await addProduct(data).then();
        if (url != '') {
            await addProduct(data);
            navigate('/staff/all-products');
        }
    };

    return (
        <div className="h-full w-full">
            {/* <h1>{progress} asad</h1> */}
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
                            required
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
                            required
                            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-xl font-medium text-gray-600">Price</label>
                        <input
                            type="text"
                            id="large-input"
                            name="price"
                            required
                            pattern="[0-9]*"
                            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-xl font-medium text-gray-600">Quentity</label>
                        <input
                            type="text"
                            id="large-input"
                            name="quentity"
                            required
                            className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                            onChange={(e) => {
                                setQuentity(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-6 flex justify-center">
                        <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
                            <label className="block mb-2 text-xl font-medium text-gray-600">Upload Image(jpg,png,svg,jpeg)</label>
                            <div className="m-4">
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-sky-50 hover:border-gray-300">
                                        <div className="flex flex-col items-center justify-center pt-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Select a photo</p>
                                        </div>
                                        <input type="file" onChange={handleImageFieldChange} className="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={(e) => {
                                handleSubmit(e, 'post');
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNewProduct;
