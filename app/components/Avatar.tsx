  <div
    className={`relative rounded-full overflow-hidden ${
      size === 'sm'
        ? 'w-8 h-8'
        : size === 'md'
        ? 'w-12 h-12'
        : 'w-16 h-16'
    } ${className}`}
  >
    {src ? (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    ) : (
      <div className="w-full h-full bg-[#000000] flex items-center justify-center">
        <span className="text-white text-lg font-semibold">
          {placeholderText}
        </span>
      </div>
    )}
  </div> 