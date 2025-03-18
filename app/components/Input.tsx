  className={`w-full px-4 py-2 rounded-lg border ${
    error
      ? 'border-[#00FF00] focus:border-[#00FF00]'
      : 'border-gray-300 focus:border-[#000000]'
  } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
    error ? 'focus:ring-[#00FF00]' : 'focus:ring-[#000000]'
  } ${className}`} 