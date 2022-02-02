import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/CustomerPortal/About';
import AddProduct from './pages/StaffPortal/AddProduct';
import HomePage from './pages/CustomerPortal/Home';
import Login from './pages/Common/Login';
import AllProducts from './pages/StaffPortal/AllProducts';
import ProductInformationPage from './pages/Common/ProductInformationPage';
import { ProductInformation } from './containers/Common/ProductInformation';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* common routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product-information" element={<ProductInformation/>}/> 
                    
                    {/* staff routes */}
                    <Route path="/add-new-product" element={<AddProduct />} />
                    <Route path="/staff/all-products" element={<AllProducts />} />
                    {/* customer routes */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
