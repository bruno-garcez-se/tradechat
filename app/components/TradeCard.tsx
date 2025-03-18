  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold text-[#000000]">
        {title}
      </h3>
      <span className={`px-2 py-1 rounded text-sm ${
        type === 'buy' ? 'bg-[#00FF00] text-white' : 'bg-red-500 text-white'
      }`}>
        {type === 'buy' ? 'Buy' : 'Sell'}
      </span>
    </div>
    <div className="text-sm text-gray-600">
      {description}
    </div>
    <div className="mt-2 text-xs text-[#00FF00]">
      {date}
    </div>
  </div> 