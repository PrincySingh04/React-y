import { memo } from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import './index.css'


const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
};

export default memo(App);