import './App.scss';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import ErrorPage from './pages/Error/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const CategoryPage = () => {
    return <h4>Woman</h4>;
};
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/women' element={<CategoryPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
