
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const AuthLayout = ({
  children,
  title,
  subtitle,
  showBackButton = true,
  onBack
}: AuthLayoutProps) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen w-full auth-gradient flex flex-col">
      {/* Header */}
      <header className="p-6">
        {showBackButton && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack} 
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={24} />
          </Button>
        )}
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-6">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 baby-shadow">
          <h1 className="text-2xl font-bold text-center mb-2">{title}</h1>
          {subtitle && (
            <p className="text-gray-600 text-center mb-6">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
