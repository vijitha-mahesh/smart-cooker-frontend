import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ProductInformation from './components/products/CustomerPortal/ProductInformation';
import AboutPage from './pages/CustomerPortal/About';
import AddProduct from './pages/StaffPortal/AddProduct';
import HomePage from './pages/CustomerPortal/Home';
import Login from './pages/Common/Login';
import AllProductsTable from './components/products/StaffPortal/AllProductsTable';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/about" element={<AboutPage />} /> */}
                    <Route path="/about" element={<ProductInformation/>} />
                    <Route path="/add-new-product" element={<AddProduct/>} />

                    <Route path="/login" element={<Login/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;