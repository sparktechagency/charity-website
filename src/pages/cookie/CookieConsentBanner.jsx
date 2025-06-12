import React, { useEffect, useState } from 'react';

const CookieConsentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookieConsent', 'all');
        setShowBanner(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'essential');
        setShowBanner(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', 'custom');
        setShowPreferences(false);
        setShowBanner(false);
    };

    return (
        <>
            {showBanner && (
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-lg p-4 md:p-6">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <p className="text-gray-800 text-sm">
                            We use cookies to enhance your experience, analyse site traffic, and support our mission to empower survivors.
                            You can accept all cookies or choose your preferences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button
                                onClick={handleAcceptAll}
                                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={() => setShowPreferences(true)}
                                className="bg-gray-200 text-gray-800 px-4 py-2 text-sm rounded hover:bg-gray-300"
                            >
                                Manage Preferences
                            </button>
                            <button
                                onClick={handleReject}
                                className="bg-red-100 text-red-700 px-4 py-2 text-sm rounded hover:bg-red-200"
                            >
                                Reject Non-Essential
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
                        By clicking “Accept All”, you consent to the use of all cookies. You can update your preferences at any time via our Cookie Settings.
                    </p>
                </div>
            )}

            {/* Preferences Modal */}
            {showPreferences && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                        <h2 className="text-lg font-semibold mb-4">Cookie Preferences</h2>
                        <p className="text-sm text-gray-700 mb-4">
                            Choose which cookies you want to allow. You can change your preferences at any time.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <input type="checkbox" checked disabled className="mr-2" />
                                <label className="text-gray-800">Essential Cookies (Always Active)</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label className="text-gray-800">Analytics Cookies</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <label className="text-gray-800">Performance Cookies</label>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-2">
                            <button
                                onClick={() => setShowPreferences(false)}
                                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSavePreferences}
                                className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Save Preferences
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsentBanner;
