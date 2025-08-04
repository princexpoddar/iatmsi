import './App.css'
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import PaperSubmission from './pages/PaperSubmission';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SubNavbar />
      <Homepage />
      {/* Other components can be added here */}
    </div>
  );
}

export default App
