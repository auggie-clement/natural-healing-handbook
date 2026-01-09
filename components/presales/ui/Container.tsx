import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow';
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', size = 'default' }) => {
  const maxWidth = size === 'narrow' ? 'max-w-4xl' : 'max-w-6xl';
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  );
};