
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onSkip: () => void;
  isLastStep?: boolean;
  backgroundColor?: string;
}

const OnboardingLayout = ({
  children,
  currentStep,
  totalSteps,
  onNext,
  onSkip,
  isLastStep = false,
  backgroundColor = "bg-baby-green"
}: OnboardingLayoutProps) => {
  return (
    <div className={cn("min-h-screen w-full flex flex-col", backgroundColor)}>
      {/* Skip button */}
      <div className="flex justify-end p-6">
        <Button 
          variant="ghost" 
          onClick={onSkip}
          className="text-gray-600 hover:text-gray-900"
        >
          Atla
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-between px-8">
        <div className="w-full max-w-md flex-1 flex flex-col items-center justify-center">
          {children}
        </div>

        {/* Progress dots and next button */}
        <div className="w-full pb-12 flex flex-col items-center space-y-6">
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-200",
                  i === currentStep - 1
                    ? "w-6 bg-primary-foreground"
                    : "bg-gray-300"
                )}
              />
            ))}
          </div>

          <Button 
            onClick={onNext} 
            className="w-full max-w-xs rounded-full py-6 text-lg font-semibold baby-shadow"
          >
            {isLastStep ? "Başla" : "Devam Et"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
