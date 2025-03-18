  <div className="relative">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center space-x-2 text-[#000000] hover:text-[#00FF00] transition-colors"
    >
      {/* ... existing code ... */}
    </button>
    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              onSelect(item);
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#000000] hover:text-white transition-colors"
          >
            {/* ... existing code ... */}
          </button>
        ))}
      </div>
    )}
  </div> 