import React, { useState } from 'react';

interface AnimatedImgButtonProps {
  src: string;
  animate: boolean;
  duration: number; // in seconds
  imgClassName?: string;
  className?: string;
  onClick?: () => void;
}

const AnimatedImgButton: React.FC<AnimatedImgButtonProps> = ({ src, animate, duration, imgClassName, className, onClick }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [applyAnimation, setApplyAnimation] = useState(false);

  const handleButtonClick = () => {
    if (animate) {
      setApplyAnimation(true);
      // Reset animation state after it's completed
      setTimeout(() => {
        setApplyAnimation(false);
      }, duration * 1000);
    }

    // Reload the image to restart the animation (if it's a GIF)
    setImgSrc(src + "?" + new Date().getTime());

    if (onClick) onClick();
  };

  return (
    <button onClick={handleButtonClick} className={`rounded-full w-12 h-12 ${className}`}>
      <img
        src={imgSrc}
        alt="Animated Image Button"
        className={`w-full h-full object-cover object-center ${applyAnimation ? `animate-shrinkBlurIn duration-${duration}s` : ''} ${imgClassName}`}
      />
    </button>
  );
};

export default AnimatedImgButton;
