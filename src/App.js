
import './App.css';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Home/>
        <Navbar/>
          <About/>
            <Portfolio/>
              <Contacts/>
                <Footer/>



    </>
  );
}

export default App;
