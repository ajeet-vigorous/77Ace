import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-95">
      <div className="flex flex-col items-center w-[120px] h-[120px] justify-center p-6 bg-black rounded-md">
        {/* Dotted spinner */}
        <div className="relative w-12 h-12">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-300 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 30}deg) translate(18px)`,
                animation: `fade 1.2s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Text */}
        <p className="text-white mt-3 text-sm">loading...</p>
      </div>

      {/* custom keyframes */}
      <style>{`
        @keyframes fade {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
