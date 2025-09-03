// Route constants for IATMSI
export default class APP_ROUTES {
  static PUBLIC = {
    HOME: '/',
    ABOUT: '/about',
    CALL_FOR_PAPERS: '/call-for-papers',
    PAPER_SUBMISSION: '/paper-submission',
    IMPORTANT_DATES: '/important-dates',
    SPONSORSHIP: '/sponsorship',
    FAQ: '/faq',
    HISTORY: '/iatmsi-history',
    COMMITTEES: '/iatmsi-committees',
    TRACK_CHAIRS: '/track-chairs',
    CAMERA_READY: '/camera-ready-instructions',
    ORAL_GUIDELINES: '/oral-presenter-guidelines',
    POSTER_GUIDELINES: '/poster-presenter-guidelines',
    PROGRAM: '/conference-program',
    VENUE: '/venue-travel',
    GALLERY: '/gallery',
    CONTACT_SUPPORT: '/contact-support',
    USER_GUIDE: '/user-guide',
    REGISTER: '/register',
    CONTACT_US: '/contact-us',
    KEYNOTE_TALKS: '/keynote-talks',
    AWARDS: '/awards',
    NOT_FOUND: '*',
  };

  static ADMIN = {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin/dashboard',
    KEYNOTE_TALKS: '/admin/keynote-talks',
    EDIT_CONTENT: '/admin/edit-content',
    SUBMIT_PAPER: '/admin/submit-paper',
    APPLY_REVIEWER: '/admin/apply-reviewer',
  };
}