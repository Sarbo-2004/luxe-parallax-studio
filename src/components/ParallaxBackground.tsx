import React, { useEffect, useState } from 'react';

type Props = {
  image: string;
  speed?: number;
  overlayGradient?: string;
};

const ParallaxBackground: React.FC<Props> = ({ image, speed = 0.3, overlayGradient }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center will-change-transform transition-transform duration-300"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${offsetY}px)`,
          filter: 'brightness(0.6)',
        }}
      />
      {overlayGradient && (
        <div className="absolute inset-0" style={{ background: overlayGradient }} />
      )}
    </div>
  );
};

export default ParallaxBackground;
