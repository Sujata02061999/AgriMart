import './App.css';
import Banner from './Component/Banner';
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
    </div>
  );
}

export default App;
