  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div
      className={`max-w-[70%] rounded-lg p-3 ${
        isUser
          ? 'bg-[#000000] text-white'
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      <span className="text-xs text-[#00FF00]">
        {message}
      </span>
    </div>
  </div>
} 