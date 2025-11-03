import { ReactNode } from "react";

interface AppContentProps {
  children: ReactNode;
  className?: string;
}

export default function AppContent({
  children,
  className = "",
}: AppContentProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
