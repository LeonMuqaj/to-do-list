'use client';
import React from 'react';
import CloseIcon from '@/assets/CloseIcon';

interface ModalContentProps {
  title: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  icon?: React.ReactNode;
  width?: string;
  height?: string;
}

const ModalContent: React.FC<ModalContentProps> = ({
  title,
  description,
  onClose,
  children,
  buttons,
  icon,
  width = "450px",
  height = "308px",
}) => {
  return (
    <div className={`w-[${width}] h-[${height}] rounded-xl bg-white shadow-[0_20px_24px_-4px_rgba(16,24,40,0.08),_0_8px_8px_-4px_rgba(16,24,40,0.03)] p-6 flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        {icon}
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {description && <p className="text-sm text-gray-600">{description}</p>}
        {children}
      </div>

      {buttons && <div className="flex justify-end gap-4">{buttons}</div>}
    </div>
  );
};

export default ModalContent;
