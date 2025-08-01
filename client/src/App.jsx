import './App.css'
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SubNavbar />
      <Homepage />
    </div>
  );
}

export default App
