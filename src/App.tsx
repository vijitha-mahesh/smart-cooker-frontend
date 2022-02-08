import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/CustomerPortal/About';
import AddProduct from './pages/StaffPortal/AddProduct';
import HomePage from './pages/CustomerPortal/Home';
import Login from './pages/Common/Login';
import AllProducts from './pages/StaffPortal/AllProducts';
import { ProductInformation } from './containers/Common/ProductInformation';
import AuthContextProvider from './contexts/AuthContext';


function App() {
    return (
        <div className="App">
            <AuthContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        {/* common routes */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/product-information" element={<ProductInformation />} />

                        {/* staff routes */}
                        <Route path="/add-new-product" element={<AddProduct />} />
                        <Route path="/staff/all-products" element={<AllProducts />} />
                        {/* customer routes */}
                        {/*test routs*/}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthContextProvider>
        </div>
    );
}

export default App;
