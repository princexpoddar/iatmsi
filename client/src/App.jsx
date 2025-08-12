import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Homepage from './pages/Homepage';
import AboutIATMSI from './pages/AboutIATMSI';
import CallForPapers from './pages/CallForPapers';
import PaperSubmission from './pages/PaperSubmission';
import ImportantDates from './pages/ImportantDates';
import Sponsorship from './pages/Sponsorship';
import FAQ from './pages/FAQ';
import IATMSIHistory from './pages/IATMSIHistory';
import IATMSICommittees from './pages/IATMSICommittees';
import TrackChairs from './pages/TrackChairs';
import CameraReadyInstructions from './pages/CameraReadyInstructions';
import OralPresenterGuidelines from './pages/OralPresenterGuidelines';
import PosterPresenterGuidelines from './pages/PosterPresenterGuidelines';
import ConferenceProgram from './pages/ConferenceProgram';
import VenueTravel from './pages/VenueTravel';
import Gallery from './pages/Gallery';
import ContactSupport from './pages/ContactSupport';
import UserGuide from './pages/UserGuide';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import CallForReviewers from './pages/CallForReviewers';
import KeynoteTalks from './pages/KeynoteTalks';
import Awards from './pages/Awards';
import Footer from './components/Footer';
import ApplyReviewer from './pages/ApplyReviewer.jsx';
import SubmitPaper from './pages/SubmitPaper.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <SubNavbar />
        <Routes>
          <Route path="/apply-reviewer" element={<ApplyReviewer />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutIATMSI />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/paper-submission" element={<PaperSubmission />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/iatmsi-history" element={<IATMSIHistory />} />
          <Route path="/iatmsi-committees" element={<IATMSICommittees />} />
          <Route path="/track-chairs" element={<TrackChairs />} />
          <Route path="/camera-ready-instructions" element={<CameraReadyInstructions />} />
          <Route path="/oral-presenter-guidelines" element={<OralPresenterGuidelines />} />
          <Route path="/poster-presenter-guidelines" element={<PosterPresenterGuidelines />} />
          <Route path="/conference-program" element={<ConferenceProgram />} />
          <Route path="/venue-travel" element={<VenueTravel />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/call-for-reviewers" element={<CallForReviewers />} />
          <Route path="/keynote-talks" element={<KeynoteTalks />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/submit-paper" element={<SubmitPaper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
