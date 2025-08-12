function Spinner({message}: {message: string}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="flex items-center gap-3 bg-white text-yellow-800 px-6 py-4 rounded-md shadow-lg border border-yellow-300">
        <svg
          className="w-6 h-6 animate-spin text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}

export default Spinner;
