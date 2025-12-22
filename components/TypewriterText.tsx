import React from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = "" }) => {
  return (
    <p className={`mb-2 leading-relaxed ${className}`}>
      {text}
    </p>
  );
};