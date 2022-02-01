import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import LoginForm from './components/Login/LoginForm';
import NavBar from './components/NavBar/NavBar';
import { ProductList } from './containers/Inventory/ProductList';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about">
                        <Route index element={<AboutPage />} />
                        <Route path=":number" element={<AboutPage />} />
                    </Route>
                    <Route path="/login" element={<Login/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;