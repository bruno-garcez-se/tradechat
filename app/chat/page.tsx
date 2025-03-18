  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold text-[#000000] mb-6">Chat de Trading</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab('chat')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'chat'
              ? 'bg-[#000000] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab('trades')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'trades'
              ? 'bg-[#000000] text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Trades
        </button>
      </div>
      <button
        onClick={handleSendMessage}
        className="bg-[#000000] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Send Message
      </button>
      <div className="text-[#00FF00] text-sm mt-2">
        {/* Existing code */}
      </div>
    </div>
  </div> 