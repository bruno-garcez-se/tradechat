  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className={`h-2.5 rounded-full ${
        variant === 'primary'
          ? 'bg-[#000000]'
          : 'bg-[#00FF00]'
      }`}
      style={{ width: `${progress}%` }}
    ></div>
  </div> 