import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Shop} from './pages/shop/Shop';
import {Cart} from './pages/cart/Cart';
import {ShopContextProvider} from './context/ShopContext';
import {BookPage} from './pages/bookPage/BookPage';

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/book' element={<BookPage />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
