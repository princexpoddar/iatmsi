import React from 'react';

export default function PaperSubmission(){
  return (
    <>
        <div className="min-h-screen bg-gray-50 py-8 font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <h2 className="text-4xl font-extrabold bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent text-center mb-8 tracking-tight">How to Submit Paper in IATMSI-2026</h2>

      <div className="bg-white/95 rounded-xl p-10 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm border border-gray-200">
        <p className="leading-7 mb-6 text-gray-800 text-lg">
          Prospective authors are encouraged to submit full papers in PDF format not exceeding 6 pages in double-column includes all figures, tables, and references. The paper must follow the standard IEEE template (<a href="https://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener" className="text-purple-600 hover:underline">link here</a>). Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions. <strong>All accepted and presented papers will undergo submission for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.</strong>
        </p>

        <p className="leading-7 mb-6 text-gray-800 text-lg">
          Submission of a scientific paper is considered a commitment that, upon acceptance, authors will submit their camera-ready version for inclusion in the formal proceedings and will present the paper at the conference. Each accepted contribution must have at least one paid registration by the time the camera-ready paper is submitted for inclusion in the proceedings. IATMSI reserves the right to remove from IEEE Xplore papers and posters not presented at the symposium.
        </p>

        <p className="leading-7 mb-6 text-gray-800 text-lg">
          For you to be able to access the submission system as an author, reviewer, program committee member, session chair, etc., you need to create an account on <span className="text-purple-600 font-semibold">Microsoft CMT</span> using the Submit button given below:
        </p>

        <div className="text-center my-10">
          <a className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white no-underline rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-purple-700 hover:to-blue-700" href="https://cmt3.research.microsoft.com/IATMSI2026" target="_blank" rel="noreferrer noopener">
            Submit a Paper
          </a>
        </div>

        <div className="bg-gray-50 p-5 rounded-lg my-6 border border-gray-200">
          <p>For the full call for papers: <a href="https://iatmsi.iiitm.ac.in/wp-content/uploads/2024/11/IATMSI-2026.pdf" target="_blank" rel="noreferrer noopener" className="text-purple-600 font-medium hover:underline hover:text-purple-700">Call for Papers</a></p>
          <p>For IEEE templates: 
            <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener" className="text-purple-600 font-medium hover:underline hover:text-purple-700">Standard</a> | 
            <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener" className="text-purple-600 font-medium hover:underline hover:text-purple-700"><strong>LaTeX</strong></a> | 
            <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noreferrer noopener" className="text-purple-600 font-medium hover:underline hover:text-purple-700"><strong>Word</strong></a>
          </p>
        </div>

        <p className="text-lg my-6 p-4 bg-gradient-to-br from-yellow-100 to-blue-100 border-l-4 border-purple-600 rounded-r-lg">
          <span className="text-purple-600 font-semibold">Submission Deadline: </span>
          <strong>20th November 2025</strong> (1st Round of Full Paper Submission Due Date)
        </p>

        <p className="leading-7 mb-6 text-gray-800 text-lg">
          We prefer the submission in LaTeX format. Kindly prepare your paper in LaTeX format for the proper IEEE format. 
        </p>

        <h4 className="text-2xl font-bold text-gray-800 my-8 mb-4 border-b-2 border-purple-600 pb-2">IEEE Policies</h4>

        <p className="leading-7 mb-6 text-gray-800 text-lg">
          IEEE reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in IEEE Xplore) if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and IEEE will take action against any author who has engaged in either practice.
        </p>

        <p className="mt-8 italic p-4 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg border border-gray-200">
      <span className="text-purple-600 font-semibold">For any clarifications regarding the paper submission guidelines please e-mail: iatmsi@iiitm.ac.in</span>
        </p>
      </div>
    </div>   
    </>
  )
}