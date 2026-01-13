import React from 'react';
import EditIcon from './EditIcon';

type EditIconBoxProps = {
  bgColor?: string; 
  className?: string; 
};

const EditIconBox: React.FC<EditIconBoxProps> = ({ bgColor = "bg-[#FFFFFF]" }) => (
  <div className={`w-11 h-11 p-3 rounded-[10px] border-gray-200 border flex justify-center items-center ${bgColor}`}>
    <EditIcon />
  </div>
);

export default EditIconBox;
