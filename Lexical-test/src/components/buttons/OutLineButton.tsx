import React from "react";

interface OutLineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function OutLineButton({ children, className, onClick }: OutLineButtonProps) {
  return (
    <button
      type="button"
      className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default OutLineButton;
