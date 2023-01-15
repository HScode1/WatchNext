import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.css';
import StoreCard from './components/StoreCard';
import CardGroup from 'react-bootstrap/CardGroup';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  return (
    <>
    <section>
      <NavBar/>
      <Hero/>
    </section>
    <section>
        <h1 style={{marginTop: '80px', fontFamily: 'Playfair Display',fontStyle: 'normal',fontWeight: '700',fontSize: '25px',lineHeight: '35px',letterSpacing: '0.1px',color: '#252B42'}}>BestSeller Product</h1>
        < StoreCard/>
    </section>
    <Contact/>
    </>
    
  );
}

export default App;

// className="container" width={1512} height={491} 