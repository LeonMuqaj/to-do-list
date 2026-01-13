import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  completed?: boolean;
}

const Label: React.FC<LabelProps> = ({ children, completed = false }) => {
  return (
    <span
      className={[
        'line-clamp-1 flex-1 overflow-hidden text-ellipsis font-[400] leading-6 text-[16px] font-sans',
        // Updated colors to match the design: gray-500 for default, gray-500 for completed without line-through
        completed ? 'text-[#000000]' : 'text-gray-500',
      ].join(' ')}
    >
      {children}
    </span>
  );
};

export default Label;