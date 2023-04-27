
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar';
import AfterLogin from './components/AfterLogin';
import Learning from './components/Learning';
import Crop from './components/Crop';
import Fertilizer from './components/Fertilizer';
import './App.scss'
import Signup from './components/Signup/Signup';
import Community from './components/Community';
function App() {
  return (
    <section className='container'>
      <NavBar />

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<AfterLogin />} />
        <Route path='/learning' element={<Learning />} />
        <Route path='/crop' element={<Crop />} />
        <Route path='/fertifier' element={<Fertilizer />} />
        <Route path='/community' element={<Community />} />

        
      </Routes>
    </section>
  );
}

export default App;
