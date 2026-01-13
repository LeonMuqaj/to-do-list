'use client';
import React from 'react';

export const FormPaper: React.FC<{ children: React.ReactNode; elevation?: number } & React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div
    {...rest}
    className={[
      // Updated to match the design's rounded corners, minimal shadow, and padding
      'w-full max-w-[638px] rounded-[16px] border-[2px] border-gray-200 bg-white shadow-l p-8 pt-6 flex flex-col items-center mx-auto',
      className,
    ].join(' ')}
  >
    {children}
  </div>
);

export const FormTypography: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, className = '', ...rest }) => (
  <p {...rest} className={['self-stretch font-Figtree text-[16px] font-400 mb-2 text-gray-700', className].join(' ')}>
    {children}
  </p>
);

export const FormRoot: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ children, className = '', ...rest }) => (
  <form {...rest} className={['w-full', className].join(' ')}>
    {children}
  </form>
);

export const FormRowBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  // Reduced gap to match the spacing between input and button
  <div {...rest} className={['flex items-center w-full gap-2', className].join(' ')}>
    {children}
  </div>
);

export const FormTextField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
  size?: string;
  variant?: string;
}> = ({ className = '', fullWidth: fw, size: sz, variant: vr, ...rest }) => (
  <input
    {...rest}
    className={[
      // Updated h-10 to h-11, rounded-lg to rounded-xl, and border color
      'flex-1 h-11 rounded-xl border border-gray-300 bg-white px-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#007AFF]',
      className,
    ].join(' ')}
  />
);

export const ButtonWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...rest }) => (
  <div {...rest} className={['shrink-0', className].join(' ')}>
    {children}
  </div>
);