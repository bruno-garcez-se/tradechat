  <div className="border border-gray-200 rounded-lg">
    {items.map((item, index) => (
      <div key={index} className="border-b border-gray-200 last:border-b-0">
        <button
          onClick={() => toggleItem(index)}
          className="w-full px-4 py-3 flex justify-between items-center text-left hover:bg-gray-50"
        >
          <span className="font-medium text-[#000000]">{item.title}</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              openItems.includes(index) ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {openItems.includes(index) && (
          <div className="px-4 py-3 bg-gray-50">
            <p className="text-gray-600">{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </div> 