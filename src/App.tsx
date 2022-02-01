import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AboutPage from './pages/About';
import AddProduct from './pages/AddProduct';
import HomePage from './pages/Home';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/add-new-product" element={<AddProduct/>} />

                    <Route path="/login" element={<Login/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;