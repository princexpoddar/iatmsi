import { Navigate } from 'react-router-dom';
import APP_ROUTES from '../../constants/appRoutes.constants.jsx';
import AuthRoute from '../AuthRoute/AuthRoute';
// Import your page components below
import Homepage from '../../pages/public/Homepage.jsx';
import AboutIATMSI from '../../pages/public/AboutIATMSI.jsx';
import CallForPapers from '../../pages/public/CallForPapers.jsx';
import PaperSubmission from '../../pages/public/PaperSubmission.jsx';
import ImportantDates from '../../pages/public/ImportantDates.jsx';
import Sponsorship from '../../pages/public/Sponsorship.jsx';
import FAQ from '../../pages/public/FAQ.jsx';
import IATMSIHistory from '../../pages/public/IATMSIHistory.jsx';
import IATMSICommittees from '../../pages/public/IATMSICommittees.jsx';
import TrackChairs from '../../pages/public/TrackChairs.jsx';
import CameraReadyInstructions from '../../pages/public/CameraReadyInstructions.jsx';
import OralPresenterGuidelines from '../../pages/public/OralPresenterGuidelines.jsx';
import PosterPresenterGuidelines from '../../pages/public/PosterPresenterGuidelines.jsx';
import ConferenceProgram from '../../pages/public/ConferenceProgram.jsx';
import VenueTravel from '../../pages/public/VenueTravel.jsx';
import Gallery from '../../pages/public/Gallery.jsx';
import ContactSupport from '../../pages/public/ContactSupport.jsx';
import UserGuide from '../../pages/public/UserGuide.jsx';
import Register from '../../pages/public/Register.jsx';
import ContactUs from '../../pages/public/ContactUs.jsx';
import KeynoteTalks from '../../pages/public/KeynoteTalks.jsx';
import Awards from '../../pages/public/Awards.jsx';
// Admin pages
import AdminLogin from '../../pages/admin/AdminLogin.jsx';
import AdminKeynoteTalks from '../../pages/admin/KeynoteTalks.jsx';
// import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
// import EditContent from '../pages/admin/EditContent.jsx';
// import SubmitPaper from '../pages/admin/SubmitPaper.jsx';
// import ApplyReviewer from '../pages/admin/ApplyReviewer.jsx';

const RouteMapping = [
  // Public routes
  { path: APP_ROUTES.PUBLIC.HOME, element: <Homepage /> },
  { path: APP_ROUTES.PUBLIC.ABOUT, element: <AboutIATMSI /> },
  { path: APP_ROUTES.PUBLIC.CALL_FOR_PAPERS, element: <CallForPapers /> },
  { path: APP_ROUTES.PUBLIC.PAPER_SUBMISSION, element: <PaperSubmission /> },
  { path: APP_ROUTES.PUBLIC.IMPORTANT_DATES, element: <ImportantDates /> },
  { path: APP_ROUTES.PUBLIC.SPONSORSHIP, element: <Sponsorship /> },
  { path: APP_ROUTES.PUBLIC.FAQ, element: <FAQ /> },
  { path: APP_ROUTES.PUBLIC.HISTORY, element: <IATMSIHistory /> },
  { path: APP_ROUTES.PUBLIC.COMMITTEES, element: <IATMSICommittees /> },
  { path: APP_ROUTES.PUBLIC.TRACK_CHAIRS, element: <TrackChairs /> },
  { path: APP_ROUTES.PUBLIC.CAMERA_READY, element: <CameraReadyInstructions /> },
  { path: APP_ROUTES.PUBLIC.ORAL_GUIDELINES, element: <OralPresenterGuidelines /> },
  { path: APP_ROUTES.PUBLIC.POSTER_GUIDELINES, element: <PosterPresenterGuidelines /> },
  { path: APP_ROUTES.PUBLIC.PROGRAM, element: <ConferenceProgram /> },
  { path: APP_ROUTES.PUBLIC.VENUE, element: <VenueTravel /> },
  { path: APP_ROUTES.PUBLIC.GALLERY, element: <Gallery /> },
  { path: APP_ROUTES.PUBLIC.CONTACT_SUPPORT, element: <ContactSupport /> },
  { path: APP_ROUTES.PUBLIC.USER_GUIDE, element: <UserGuide /> },
  { path: APP_ROUTES.PUBLIC.REGISTER, element: <Register /> },
  { path: APP_ROUTES.PUBLIC.CONTACT_US, element: <ContactUs /> },
  { path: APP_ROUTES.PUBLIC.KEYNOTE_TALKS, element: <KeynoteTalks /> },
  { path: APP_ROUTES.PUBLIC.AWARDS, element: <Awards /> },

  // Admin routes (protected)
  { path: APP_ROUTES.ADMIN.LOGIN, element: <AdminLogin /> },
  { path: APP_ROUTES.ADMIN.KEYNOTE_TALKS, element: <AuthRoute><AdminKeynoteTalks /></AuthRoute> },
  // { path: APP_ROUTES.ADMIN.DASHBOARD, element: <AuthRoute><AdminDashboard /></AuthRoute> },
  // { path: APP_ROUTES.ADMIN.EDIT_CONTENT, element: <AuthRoute><EditContent /></AuthRoute> },
  // { path: APP_ROUTES.ADMIN.SUBMIT_PAPER, element: <AuthRoute><SubmitPaper /></AuthRoute> },
  // { path: APP_ROUTES.ADMIN.APPLY_REVIEWER, element: <AuthRoute><ApplyReviewer /></AuthRoute> },
];

// RouteMapping is now an array of route objects
export default RouteMapping;