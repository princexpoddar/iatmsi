import React from "react";

function CallForPapers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* hero sec*/}
      <section className="bg-gradient-to-br from-blue-500 to-purple-500 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Call for Papers</h1>
          <h2 className="text-2xl mb-6 opacity-90">
            Be part of our upcoming conference
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 opacity-80">
            Submit your original research papers to be considered for
            presentation and publication. We welcome contributions from
            academia, industry, and government institutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
            href="/call-for-papers.txt"
            download
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 mr-4"
          >
            Download Guidelines
          </a>
            <a
              href="/submit-paper"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-500 hover:-translate-y-0.5 transition-all"
            >
              Submit Your Paper
            </a>
          </div>
        </div>
      </section>

      {/*themes */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Conference Theme</h2>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-12 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">[Theme Title]</h3>
          <p className="text-lg opacity-90">
            [Theme description]
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Conference Tracks
        </h2>
        <div className="grid gap-8 max-w-6xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="bg-white p-8 rounded-xl shadow hover:-translate-y-1 hover:shadow-xl transition-all relative"
            >
              <span className="absolute -top-4 left-6 bg-gradient-to-br from-blue-500 to-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {num}
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Track {num}
              </h3>
              <p className="text-gray-600">
                [Track descriptions]
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* dates n guides sec */}
      <section id="dates" className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Important Dates & Submission Guidelines
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 px-4 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {[
              {event:"Paper Submission Deadline", date:"Date 1 15 august"},
              {event:"Notification of Acceptance", date:"Date 2"},
              {event:"Camera-ready Submission", date:"July 25, 3012"},
            ].map((d, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-6 bg-gray-50 border-l-4 border-blue-500 rounded-lg hover:bg-gray-100 hover:translate-x-1 transition-all"
              >
                <div>
                  <p className="font-semibold text-gray-800">{d.event}</p>
                  <p className="text-blue-500 font-medium">{d.date}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 border-l-4 border-purple-500 text-white">
              <div>
                <p className="font-semibold">Conference Date</p>
                <p className="font-medium">March 20-22, 2026</p>
              </div>
            </div>
          </div>

          {/*guidelines */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Submission Guidelines
            </h3>
            <ul className="list-none">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">
                    [Guideline point {i} placeholder...]
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Benefits of Participation
        </h2>
        <div className="grid gap-8 max-w-6xl mx-auto px-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {title:"IEEE Xplore", color:"from-blue-900 to-blue-500"},
            {title:"Scopus Indexing", color:"from-green-700 to-green-400"},
            {title:"Networking", color:"from-purple-700 to-purple-500"},
            {title:"Recognition", color:"from-red-600 to-red-400"},
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow text-center hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold bg-gradient-to-br ${b.color}`}
              >
                ➴
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600">[Benefit description]</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-500 py-12 text-white">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6 opacity-90">
            Have questions? Reach out to our conference team.
          </p>
          <a
            href="mailto:conference@example.com"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 hover:-translate-y-0.5 transition-all inline-block"
          >
            conference@example.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default CallForPapers;
