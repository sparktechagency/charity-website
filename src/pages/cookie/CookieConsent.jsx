import React, { useEffect, useState } from "react"

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [preferences, setPreferences] = useState({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false,
    })

    useEffect(() => {
        const saved = localStorage.getItem("cookiePreferences")
        if (!saved) {
            setShowBanner(true)
        } else {
            setPreferences(JSON.parse(saved))
        }
    }, [])

    const handleAcceptAll = () => {
        const all = {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true,
        }
        localStorage.setItem("cookiePreferences", JSON.stringify(all))
        setPreferences(all)
        setShowBanner(false)
    }

    const handleRejectAll = () => {
        const none = {
            necessary: false,
            functional: false,
            analytics: false,
            marketing: false,
        }
        localStorage.setItem("cookiePreferences", JSON.stringify(none))
        setPreferences(none)
        setShowBanner(false)
    }

    const handleSave = () => {
        localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
        setShowBanner(false)
        setShowSettings(false)
    }

    const updatePreference = (key, value) => {
        if (key === "necessary") return
        setPreferences((prev) => ({ ...prev, [key]: value }))
    }

    if (!showBanner) return null

    return (
        <>
            {/* Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t p-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold mb-1">We use cookies</h2>
                        <p className="text-sm text-gray-600">
                            We use cookies to personalize content and analyze traffic. You can accept all cookies or manage your preferences.
                        </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={handleAcceptAll}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={handleRejectAll}
                            className="border border-gray-300 px-4 py-2 rounded text-sm"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={() => setShowSettings(true)}
                            className="border border-gray-300 px-4 py-2 rounded text-sm"
                        >
                            Customize
                        </button>
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {showSettings && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white max-w-xl w-full rounded-lg p-6 space-y-6 overflow-y-auto max-h-[90vh]">
                        <h3 className="text-xl font-bold">Cookie Preferences</h3>
                        <p className="text-sm text-gray-600">
                            Customize your cookie preferences below. Necessary cookies are always enabled.
                        </p>

                        {[
                            {
                                label: "Necessary",
                                key: "necessary",
                                desc: "Essential for site functionality like security and network management.",
                            },
                            {
                                label: "Functional",
                                key: "functional",
                                desc: "Remember preferences and enable personalization.",
                            },
                            {
                                label: "Analytics",
                                key: "analytics",
                                desc: "Help us understand site usage with anonymous data.",
                            },
                            {
                                label: "Marketing",
                                key: "marketing",
                                desc: "Used for ads and tracking across platforms.",
                            },
                        ].map(({ label, key, desc }) => (
                            <div key={key} className="flex justify-between items-start gap-4 border rounded p-4">
                                <div>
                                    <p className="font-medium">{label}</p>
                                    <p className="text-sm text-gray-600">{desc}</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={preferences[key]}
                                    disabled={key === "necessary"}
                                    onChange={(e) => updatePreference(key, e.target.checked)}
                                    className="mt-1"
                                />
                            </div>
                        ))}

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowSettings(false)}
                                className="border px-4 py-2 rounded text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                            >
                                Save Preferences
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CookieConsent
