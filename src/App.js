import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Thankyou from './components/Thankyou';
import ReactLogo from './components/animation/ReactLogo';
import Error from './components/Error';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = "Web Portfolio     border: 1px solid white;Brandon Chen"
  },[])

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sidebar/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/contact/thankyou' element={<Thankyou/>}/>
        <Route path='/file' element={<ReactLogo/>}></Route>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>;
}


export default App;
