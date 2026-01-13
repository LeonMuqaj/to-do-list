'use client';
import React from 'react';

export const TodoItemPaper: React.FC<{
  children: React.ReactNode;
  itemVariant: 'completed' | 'default';
  elevation?: number;
  className?: string;
}> = ({ children, itemVariant, className }) => {
  const base =
    // Adjusted padding, removed shadow-sm, changed border style
    'flex w-full max-w-[570px] sm:max-w-full md:max-w-[570px] items-center justify-between px-4 py-2 rounded-lg border-[1.8px] transition-all duration-200 mb-2 h-11';
  
  const variant =
    itemVariant === 'completed'
      // Updated to match the specific light green background and border from the design
      ? 'border-[#ABEFC6] bg-[#F6FEF9] opacity-90'
      // Adjusted default item border and removed hover effect to match design simplicity
      : 'border-gray-300 bg-white';

  return <div className={`${base} ${variant} ${className || ''}`}>{children}</div>;
};