import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  isGray: boolean;
  className: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, isGray, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        filter: isGray ? 'grayscale(100%)' : 'none',
        transition: 'filter 0.3s ease',
      }}
      className={className}
    />
  );
};

export default ImageComponent;
