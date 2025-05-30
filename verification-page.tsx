export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Loading Spinner */}
        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>

        {/* Verification Text */}
        <p className="text-gray-700 text-lg font-medium">We're verifying your browser</p>
      </div>

      {/* Security Checkpoint ID at bottom */}
      <div className="absolute bottom-8 text-xs text-gray-400 font-mono">
        Vercel Security Checkpoint | sfdi:174b419512-db8f4Q0/ywzG17lMeEaMUzQQZgKXof1E
      </div>
    </div>
  )
}
