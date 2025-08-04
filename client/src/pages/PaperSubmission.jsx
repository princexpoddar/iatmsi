import React from 'react';
import './PaperSubmission.css'; // Assuming you have a CSS file for styling
export default function PaperSubmission(){
  return (
    <>
        <div className="submission-container">
      <h2 className="main-heading">How to Submit Paper in IATMSI-2026</h2>

      <div className="content-card">
        <p className="content-text">
          Prospective authors are encouraged to submit full papers in PDF format not exceeding 6 pages in double-column includes all figures, tables, and references. The paper must follow the standard IEEE template (<a href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener">link here</a>). Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions. <strong>All accepted and presented papers will undergo submission for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.</strong>
        </p>

        <p className="content-text">
          Submission of a scientific paper is considered a commitment that, upon acceptance, authors will submit their camera-ready version for inclusion in the formal proceedings and will present the paper at the conference. Each accepted contribution must have at least one paid registration by the time the camera-ready paper is submitted for inclusion in the proceedings. IATMSI reserves the right to remove from IEEE Xplore papers and posters not presented at the symposium.
        </p>

        <p className="content-text">
          For you to be able to access the submission system as an author, reviewer, program committee member, session chair, etc., you need to create an account on <span className="highlight-text">Microsoft CMT</span> using the Submit button given below:
        </p>

        <div className="button-wrapper">
          <a className="submit-button" href="https://cmt3.research.microsoft.com/IATMSI2026" target="_blank" rel="noreferrer noopener">
            Submit a Paper
          </a>
        </div>

        <div className="link-group">
          <p>For the full call for papers: <a href="https://iatmsi.iiitm.ac.in/wp-content/uploads/2024/11/IATMSI-2026.pdf" target="_blank" rel="noreferrer noopener">Call for Papers</a></p>
          <p>For IEEE templates: 
            <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener">Standard</a> | 
            <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener"><strong>LaTeX</strong></a> | 
            <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener"><strong>Word</strong></a>
          </p>
        </div>

        <p className="deadline-text">
          <span className="highlight-text">Submission Deadline: </span>
          <strong>20th November 2025</strong> (1st Round of Full Paper Submission Due Date)
        </p>

        <p className="content-text">
          We prefer the submission in LaTeX format. Kindly prepare your paper in LaTeX format for the proper IEEE format. 
        </p>

        <h4 className="sub-heading">IEEE Policies</h4>

        <p className="content-text">
          IEEE reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in IEEE Xplore) if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and IEEE will take action against any author who has engaged in either practice.
        </p>

        <p className="contact-text">
      <span className="highlight-text">For any clarifications regarding the paper submission guidelines please e-mail: iatmsi@iiitm.ac.in</span>
        </p>
      </div>
    </div>   
    </>
  )
}