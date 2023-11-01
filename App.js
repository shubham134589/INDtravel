import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Payment from './components/Payment';
import SignUpPage from './routes/SignUpPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/SignUp' element={<SignUpPage />} /> {/* Sign Up route */}
        <Route path='/' element={<Home />} /> {/* Default route */}
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
