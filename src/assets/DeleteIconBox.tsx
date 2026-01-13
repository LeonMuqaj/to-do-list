import React from "react";
import DeleteIcon from "./DeleteIcon";

type DeleteIconBoxProps = {
  bgColor?: string;     
  borderColor?: string;  
  size?: string;       
  padding?: string;     
  className?: string;     
};

const DeleteIconBox: React.FC<DeleteIconBoxProps> = ({
  bgColor = "bg-red-50",
  borderColor = "border-red-200",
  size = "44px",
  padding = "12px",
  className = "",
}) => {
  return (
    <div
      className={`rounded-[10px] border ${borderColor} flex justify-center items-center ${bgColor} ${className}`}
      style={{ width: size, height: size, padding: padding }}
    >
      <DeleteIcon />
    </div>
  );
};

export default DeleteIconBox;
