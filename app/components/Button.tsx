  className={`px-6 py-2 rounded-lg transition-colors ${
    variant === 'primary'
      ? 'bg-[#000000] text-white hover:bg-opacity-90'
      : variant === 'secondary'
      ? 'bg-[#00FF00] text-white hover:bg-opacity-90'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  } ${className}`} 