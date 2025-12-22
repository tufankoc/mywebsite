import React from 'react';

interface RetroBoxProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export const RetroBox: React.FC<RetroBoxProps> = ({ title, children, id }) => {
  return (
    <div id={id} className="mb-12">
      <h3 className="text-green-500 font-bold text-lg mb-4 border-b border-gray-800 pb-1 w-full sm:w-1/2">
        {title}
      </h3>
      <div className="pl-0 sm:pl-4 text-gray-300">
        {children}
      </div>
    </div>
  );
};