'use client';
import React from 'react';

type Variant = 'primary' | 'secondary' | 'danger';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customVariant: Variant;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const variantClasses: Record<Variant, string> = {
  // Updated primary variant to match the "Add" button style
  primary:
    'text-white bg-[#0086C9] hover:bg-[#006399] disabled:bg-[#0086C9] disabled:text-white',
  secondary:
    'text-black bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-200',
  danger:
    'text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:text-white',
};

const CustomButton: React.FC<CustomButtonProps> = ({
  customVariant,
  width,
  height,
  borderRadius,
  className = '',
  children,
  ...rest
}) => {
  const style: React.CSSProperties = {
    width: width || undefined,
    height: height || undefined,
    borderRadius: borderRadius || undefined,
  };

  return (
    <button
      {...rest}
      style={style}
      // Updated rounded-md to rounded-lg and adjusted button styling for the design
      className={[
        'rounded-lg text-[16px] font-medium leading-6 px-4 py-2 inline-flex items-center justify-center shadow-none transition-colors h-10',
        variantClasses[customVariant],
        className,
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default CustomButton;