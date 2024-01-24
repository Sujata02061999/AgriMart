import './App.css';
import Banner from './Component/Banner';
import BaseCard from './Component/Card';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
     <div>
      <Navbar/>
     </div>
     <div>
      <Banner/>
     </div>
     <div className='main-card-block'>
      <BaseCard/>
     </div>
    </div>
  );
}

export default App;
