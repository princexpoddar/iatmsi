import React from 'react';

export default function SubmitPaper() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Paper Submission
        </h1>

        {/* instructions */}
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li className="marker:text-blue-500">
            Placeholder instruction numero uno.
          </li>
          <li className="marker:text-blue-800">
            Placeholder instruction numero dos. And below form is placeholder for now.
          </li>
        </ul>

        {/* guideline download */}
        <div className="mt-8 text-center">
          <a
            href="/call-for-papers.txt"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow"
          >
            📄 Download Submission Guidelines
          </a>
        </div>

        {/* Sform */}
        <form className="mt-12 bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Application Form
          </h2>
          <input
            type="text"
            placeholder=" Author 1 Full Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Author 1 Email Address"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Area of Expertise (more areas can be added later)"
            className="w-full border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
