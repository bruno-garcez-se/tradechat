  className={`p-4 rounded-lg ${
    type === 'success'
      ? 'bg-green-100 text-green-800'
      : type === 'error'
      ? 'bg-red-100 text-red-800'
      : type === 'warning'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-[#000000] text-white'
  } ${className}`} 