import { useState, useEffect } from "react"

export default function CookieSettingsButton() {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [preferences, setPreferences] = useState({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false,
    })

    useEffect(() => {
        const saved = localStorage.getItem("cookiePreferences")
        if (saved) {
            setPreferences(JSON.parse(saved))
        }
    }, [])

    const handlePreferenceChange = (key, value) => {
        if (key === "necessary") return
        setPreferences((prev) => ({ ...prev, [key]: value }))
    }

    const handleSave = () => {
        setIsLoading(true)
        localStorage.setItem("cookiePreferences", JSON.stringify(preferences))
        setIsLoading(false)
        setOpen(false)
    }

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setOpen(true)}
                className="border text-sm px-4 py-2 rounded-md hover:bg-gray-100"
            >
                ⚙️ Cookie Settings
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-bold flex items-center gap-2">⚙️ Cookie Preferences</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✖️
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">
                            Manage your cookie preferences. Necessary cookies are always enabled.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    key: "necessary",
                                    label: "Strictly Necessary",
                                    desc: "Essential cookies that cannot be disabled.",
                                    color: "text-green-600",
                                    disabled: true,
                                },
                                {
                                    key: "functional",
                                    label: "Functional",
                                    desc: "Enhanced functionality and personalization.",
                                    color: "text-blue-600",
                                },
                                {
                                    key: "analytics",
                                    label: "Analytics",
                                    desc: "Help us improve by analyzing usage patterns.",
                                    color: "text-purple-600",
                                },
                                {
                                    key: "marketing",
                                    label: "Marketing",
                                    desc: "Personalized ads and marketing campaigns.",
                                    color: "text-orange-600",
                                },
                            ].map(({ key, label, desc, color, disabled }) => (
                                <div key={key} className="flex justify-between items-start gap-4 p-4 border rounded-lg">
                                    <div className="flex-1">
                                        <p className={`font-medium ${color}`}>{label}</p>
                                        <p className="text-sm text-gray-600 mt-1">{desc}</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={preferences[key]}
                                        disabled={disabled}
                                        onChange={(e) => handlePreferenceChange(key, e.target.checked)}
                                        className="w-5 h-5 mt-1"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-end mt-6 gap-2">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-sm border px-4 py-2 rounded hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isLoading}
                                className="text-sm px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                {isLoading ? "Saving..." : "Save Preferences"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
