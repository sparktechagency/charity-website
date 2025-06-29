import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage = () => {
    window.scrollTo(0, 0);
    return (
        <div className=' pt-12 ' >
            <Helmet>
                <title>Virtuehope | Privacy</title>
            </Helmet>
            <div className="max-w-[1216px] mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-xl lg:text-5xl  font-bold mb-6 text-center text-[#403730]">
                    Privacy Notice - Virtue Hope C.I.C.
                </h1>

                <p className="mb-6 text-[#263234] font-medium  lg:text-2xl  ">
                    At Virtue Hope C.I.C., we are committed to protecting and respecting your privacy.
                    This notice explains how we collect, use, store, and protect any personal information
                    you provide to us through our website or services.
                </p>

                {/* Section 1 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">1. Who We Are</h2>
                    <p>
                        Virtue Hope C.I.C. is a UK-based Community Interest Company dedicated to supporting
                        women survivors of abuse and trauma. Our company number is 16173113 and our registered
                        office is 86-90 Paul Street, London, EC2 4NE.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">2. What Information We Collect</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Name and contact details (e.g. email, phone number)</li>
                        <li>Donation and transaction information</li>
                        <li>Communication preferences</li>
                        <li>IP address and browsing behaviour on our site</li>
                        <li>Any information you choose to submit via forms (e.g. registering interest, bidding, volunteering, etc.)</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">3. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Respond to enquiries and requests</li>
                        <li>Process donations and auction bids</li>
                        <li>Keep you updated about our work and opportunities (if you opt-in)</li>
                        <li>Improve and secure our website</li>
                        <li>Meet our legal and regulatory obligations</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">4. Lawful Basis for Processing</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Your consent (e.g. for marketing communications)</li>
                        <li>Contractual obligations (e.g. fulfilling a service)</li>
                        <li>Legal obligations (e.g. record keeping)</li>
                        <li>Legitimate interest (e.g. improving our services)</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">5. Sharing Your Information</h2>
                    <p>
                        We never sell your data. We may share it with trusted third parties who help us operate
                        our services—such as payment processors or IT providers—but only under strict data protection agreements.
                    </p>
                </div>

                {/* Section 6 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">6. How We Store Your Data</h2>
                    <p>
                        Your data is stored securely using encrypted systems. We retain your information only
                        for as long as necessary for the purpose it was collected, or as required by law.
                    </p>
                </div>

                {/* Section 7 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">7. Your Rights</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Access your data</li>
                        <li>Request correction or deletion</li>
                        <li>Withdraw your consent at any time</li>
                        <li>Object to or restrict certain types of processing</li>
                        <li>Lodge a complaint with the UK Information Commissioner’s Office (ICO)</li>
                    </ul>
                </div>

                {/* Section 8 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">8. Cookies</h2>
                    <p>
                        We use cookies to improve your experience on our website. You can manage or disable
                        cookies through your browser settings.
                    </p>
                </div>

                {/* Section 9 */}
                <div className="mb-6">
                    <h2 className="font-semibold text-xl lg:text-2xl lg:leading-9 lg:mt-12 mt-2">9. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this privacy notice or your personal data,
                        please contact us:
                    </p>
                    <p className="mt-2">
                        Virtue Hope C.I.C., 86-90 Paul Street, London, EC2 4NE <br />
                        <a href="mailto:privacy@virtuehope.com" className="text-blue-600 underline">
                            privacy@virtuehope.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;