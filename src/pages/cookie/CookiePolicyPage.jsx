import React from "react";

const PrivacyPolicyPage = () => {
    return (
        <div className=" py-10 px-4">
            <div className="max-w-[1480px] mx-auto bg-white rounded-lg  p-6 md:p-10">
                <h1 className="text-3xl font-bold text-center text-black mb-8">
                    Privacy Notice & Cookie Policy - Virtue Hope C.I.C.
                </h1>

                <p className="text-gray-600 mb-6 text-justify">
                    At Virtue Hope C.I.C., we are committed to protecting and respecting your privacy. This notice explains how we collect, use, store, and protect any personal information you provide to us through our website or services.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">1. Who We Are</h2>
                    <p>
                        Virtue Hope C.I.C. is a UK-based Community Interest Company dedicated to supporting women survivors of abuse and trauma. Our company number is 16173113 and our registered office is 86-90 Paul Street, London, EC2 4NE.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">2. What Information We Collect</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Name and contact details (e.g. email, phone number)</li>
                        <li>Donation and transaction information</li>
                        <li>Communication preferences</li>
                        <li>IP address and browsing behaviour</li>
                        <li>Information you submit via forms (e.g. volunteering, bidding)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">3. How We Use Your Information</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Respond to enquiries and requests</li>
                        <li>Process donations and auction bids</li>
                        <li>Send updates if opted-in</li>
                        <li>Improve and secure our website</li>
                        <li>Meet legal obligations</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">4. Lawful Basis for Processing</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Your consent (e.g. marketing)</li>
                        <li>Contractual obligations</li>
                        <li>Legal obligations</li>
                        <li>Legitimate interest</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">5. Sharing Your Information</h2>
                    <p>
                        We never sell your data. We may share it with trusted third parties such as payment processors and IT providers under strict data protection agreements.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">6. How We Store Your Data</h2>
                    <p>
                        Your data is stored securely using encrypted systems. We retain it only as long as necessary or required by law.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">7. Your Rights</h2>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Access your data</li>
                        <li>Request correction or deletion</li>
                        <li>Withdraw consent at any time</li>
                        <li>Object to/restrict processing</li>
                        <li>Lodge complaint with UK ICO</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">8. Cookies</h2>
                    <p>We use cookies to improve your experience. You can manage or disable cookies via your browser settings.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">9. Contact Us</h2>
                    <p>
                        For any concerns, contact us at: <br />
                        Virtue Hope C.I.C., 86-90 Paul Street, London, EC2 4NE <br />
                        <a href="mailto:privacy@virtuehope.com" className="text-indigo-600 underline">privacy@virtuehope.com</a>
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-black mb-3">Cookie Policy</h2>
                    <p>This Cookie Policy explains how Virtue Hope C.I.C. uses cookies and similar technologies on our website.</p>

                    <h3 className="text-lg font-semibold mt-4">1. What Are Cookies?</h3>
                    <p>Cookies are small text files stored on your device. They help improve site functionality and user experience.</p>

                    <h3 className="text-lg font-semibold mt-4">2. How We Use Cookies</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Ensure website functionality</li>
                        <li>Remember preferences</li>
                        <li>Analytics</li>
                        <li>Manage donations and bidding</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">3. Types of Cookies</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li><strong>Necessary:</strong> Essential for basic site features</li>
                        <li><strong>Preferences:</strong> Save user choices</li>
                        <li><strong>Statistics:</strong> Anonymous usage data</li>
                        <li><strong>Marketing:</strong> Used for ads (if opted-in)</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">4. Your Choices</h3>
                    <p>Manage your preferences anytime using the “Cookie Settings” link or your browser settings. Blocking cookies may affect functionality.</p>

                    <h3 className="text-lg font-semibold mt-4">5. Third-Party Cookies</h3>
                    <p>We may embed content from external platforms like YouTube. Their cookies are beyond our control.</p>

                    <h3 className="text-lg font-semibold mt-4">6. Updates</h3>
                    <p>We may update this policy to reflect changes. Please review it periodically.</p>

                    <h3 className="text-lg font-semibold mt-4">7. Contact</h3>
                    <p>
                        If you have any questions, email:{" "}
                        <a href="mailto:privacy@virtuehope.com" className="text-indigo-600 underline">privacy@virtuehope.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
