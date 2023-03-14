import './App.css';
import Banner from './Components/Banner';
import Body from './Components/Body';
import Hero from './Components/Hero';
import Map from './Components/Map';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='body__container'>
        <div className="body__carasoul__hero">
          <Hero />
        </div>

      </div>
      {/* <Hero /> */}
      <Body /> 
      {/* <Map /> */}
      {/* <Banner /> */}
    </div>
  );
}

export default App;
