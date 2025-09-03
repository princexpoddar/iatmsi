import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Footer from './components/Footer';

import appRoutes from './constants/appRoutes.constants';
import RouteMapping from './components/RouteMapping/RouteMapping';

function App() {
  const mappedRoutes = RouteMapping;
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <SubNavbar />
        <Routes>
          {mappedRoutes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
