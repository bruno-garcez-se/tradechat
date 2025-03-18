  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#000000]">
          {title}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-[#00FF00] transition-colors"
        >
          Close
        </button>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#000000] text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div> 