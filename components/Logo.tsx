import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, className = "" }) => {
  return (
    <img
      src="/logo.svg"
      alt="ButtonUI Logo"
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
