import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Overlay } from './components/Overlay/Overlay';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Checkout } from './layouts/Checkout/Checkout';
import { CardDetails } from './layouts/CardDetails/CardDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='Test-Project' element={<Overlay pageName={'Главная'} />} />
          <Route path='Test-Project/orders' element={<Overlay pageName={'Заказы'} />} />
          <Route path='Test-Project/products' element={<Overlay pageName={'Товары'} />} />
          <Route path='Test-Project/reviews' element={<Overlay pageName={'Отзывы'} />} />
          <Route path='Test-Project/checkout' element={<Checkout />} />
          <Route path='Test-Project/checkout/:id' element={<CardDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
