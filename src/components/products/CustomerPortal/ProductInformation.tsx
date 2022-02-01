export default function ProductInformation() {
    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 p-5 mx-auto flex flex-wrap shadow shadow-sky-700">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                        src="https://res.cloudinary.com/vijitha-mahesh/image/upload/v1643468392/SMARTcooker/gasCooker.jpg"
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">   
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 pb-7">Rice Cooker</h1>
                        <p className="leading-relaxed">
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
                            Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                        </p>
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
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl  text-gray-900">RS. 3000.00</span>
                            <button className="flex ml-auto text-white text-xl bg-blue-500 border-0 py-2 mt-3 px-6 focus:outline-none hover:bg-sky-700 rounded">Buy</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
