import React, { useState, useEffect } from "react";

const Loading = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 6) % 360); // steady rotation
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container ml-50 flex-grow flex items-center justify-center h-screen bg-zinc-100">
      <div
        style={{
          width: "80px",
          height: "80px",
          border: "10px solid rgba(59, 130, 246, 0.2)", // blue-400 light
          borderTop: "10px solid #60a5fa", // blue-400
          borderRadius: "50%",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear",
        }}
      ></div>
    </div>
  );
};

export default Loading;