import React, { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  children: ReactNode;
  maxWidth?: string;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  maxWidth = 'max-w-7xl', // Default to Tailwind's max-w-7xl
}) => {
  return (
    <div className={`mx-auto ${maxWidth} px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
