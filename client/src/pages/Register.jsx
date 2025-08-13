import React from 'react';

function Register() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Conference Registration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            IATMSI-2026 registration can be done online, and payment in Indian Rupees (₹) & US Dollars ($) are only accepted. 
            Registration for tutorials will commence from 15th October 2025, and will be closed on 1st Feb. 2026 by 11:59 pm as per the Indian Standard Time.
          </p>
        </div>

        {/* Registration Category Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
            Registration Category
          </h2>
          
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            The registration fee for Indian Delegates in (Indian Rupees) is:
          </h3>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <div className="text-center">
              <img 
                src="https://iatmsi.iiitm.ac.in/wp-content/uploads/2025/07/Registration-Fees-scaled.jpg" 
                alt="IATMSI-2026 Registration Fees Table - Early Bird and Regular Registration rates for Indian and International Delegates" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-3">Registration fees for IATMSI-2026 Conference</p>
            </div>
          </div>
        </div>

        {/* Registration Guidelines Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
            Registration Guidelines
          </h2>
          
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Please note that the fees shown above are inclusive of all taxes and levies. Any gateway charges along with applicable taxes or levies, if any, will have to be borne by the registrant.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>All registered Indian authors attending the conference in offline mode will be reimbursed Sleeper Class train fare, up to a maximum of ₹2500.</strong></span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>IEEE member fees discount is only applicable if an active IEEE membership number is provided in the registration form. IEEE members are requested to upload IEEE membership details during the online registration process, if registering under IEEE category.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Students are defined as full-time students, enrolled for degrees or diplomats with a university or another similar institution. The proof of enrollment (Valid Student ID showing name and current status) should be scanned and uploaded on the registration system).</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>All registrations include admission to all technical sessions and E-proceeding.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>At least one of the authors must complete an author registration by the final camera-ready paper submission deadline for their paper to be included in the final program of the conference.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>One author registration covers only one paper.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>To upload your final paper, you need a registration number, issued by the online registration system. Please make registration and payment before the final paper submission.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Payment can be made by Credit cards, VISA, Master, JCB, American Express, Diners Club cards are accepted.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>For any registration category, no refunds will be made in any case.</span>
            </li>
            
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Registration fees of all categories except tutorial include a registration kit, Presentation slot</strong>, <strong>Refreshments (Morning and Evening) and 3 Lunches, Copy of Conference Proceedings (Soft Copy), Certificate, Eligibility for all technical sessions, cultural event coupons and one-day Gala dinner coupon.</strong> A registration kit will be provided only to the offline attendees.</span>
            </li>
          </ul>
        </div>

        {/* First Method of Registration */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-yellow-500 pb-2">
            1. First Method of Registration (for Indian Authors & Participants only)
          </h2>
          
          <p className="text-gray-700 mb-6">
            Choose your registration category from the above table and transfer the corresponding amount in any of the below mentioned account (QR Code):
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* QR Code Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">QR Code Image</span>
              </div>
            </div>
            
            {/* Bank Details */}
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">NAME OF A/C HOLDER:</p>
                <p className="font-semibold text-gray-900">ABV IIITM-IEEE STUDENT BRANCH</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">A/C No.:</p>
                <p className="font-semibold text-gray-900">946210110004899</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">Bank Name:</p>
                <p className="font-semibold text-gray-900">Bank of India, IIITM Campus, Gwalior</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">IFSC Code:</p>
                <p className="font-semibold text-gray-900">BKID0009462</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">Swift Code:</p>
                <p className="font-semibold text-gray-900">BKIDINBBGWA</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600 mb-2">MICR CODE:</p>
                <p className="font-semibold text-gray-900">474013010</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-gray-700 mb-3">
              <strong>After the payment, Kindly fill the below registration form:</strong>
            </p>
            <a 
              href="https://forms.gle/6VuPCXXQCjchdYdC7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Registration Form
            </a>
          </div>
        </div>

        {/* Second Method of Registration */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
            2. Second Method of Registration (for International Authors & Participants only)
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <strong>Indian Authors or International Authors who want to pay by credit/debit card etc. also can pay by this method. All the international authors have to select the second option i.e. International (stripe) gateway on the Explara portal. The online registration system is now available at the following link:</strong>
            </p>
          </div>
          
          <div className="text-center mb-6">
            <a 
              href="https://in.explara.com/e/ieee-iatmsi-2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-red-500 text-white font-bold text-lg rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Registration
            </a>
          </div>
          
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-gray-700 mb-3">
              <strong>After the payment, Kindly fill the below registration form:</strong>
            </p>
            <a 
              href="https://forms.gle/6VuPCXXQCjchdYdC7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Registration Form
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notice</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Registration Period</div>
              <div className="text-gray-700">Oct 15, 2025 - Feb 1, 2026</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Payment Methods</div>
              <div className="text-gray-700">Bank Transfer & Online Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register; 