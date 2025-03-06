import React, { ReactNode } from "react";

interface PageContainerProps {
  children?: ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`max-w-7xl w-[90%] mx-auto ${className}`}>{children}</div>
  );
};

export default PageContainer;
