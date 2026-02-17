import React from 'react';

interface SplineBackgroundProps {
  sceneUrl: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ sceneUrl }) => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-black">
      {/* 
        The iframe is placed at the back with z-0.
        The content overlay will have z-10.
        We allow pointer events on the iframe so the Spline scene can react to the mouse.
      */}
      <iframe 
        src={sceneUrl} 
        className="w-full h-full border-0"
        title="Spline 3D Background"
        loading="lazy"
        allow="fullscreen"
      />
      
      {/* Gradient Overlay for text readability, passing events through to the iframe */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};

export default SplineBackground;
