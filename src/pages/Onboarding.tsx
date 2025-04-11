
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "@/components/OnboardingLayout";
import { 
  OnboardingScreen1, 
  OnboardingScreen2, 
  OnboardingScreen3, 
  OnboardingScreen4 
} from "@/components/OnboardingScreens";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Check if onboarding was completed before
  useEffect(() => {
    const onboardingCompleted = localStorage.getItem("onboardingCompleted");
    if (onboardingCompleted === "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  const completeOnboarding = () => {
    localStorage.setItem("onboardingCompleted", "true");
    navigate("/login");
  };

  // Background colors for each step
  const getBackgroundColor = () => {
    switch (currentStep) {
      case 1:
        return "bg-baby-green";
      case 2:
        return "bg-baby-blue";
      case 3:
        return "bg-baby-purple";
      case 4:
        return "bg-baby-yellow";
      default:
        return "bg-baby-green";
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNext={handleNext}
      onSkip={handleSkip}
      isLastStep={currentStep === totalSteps}
      backgroundColor={getBackgroundColor()}
    >
      {currentStep === 1 && <OnboardingScreen1 />}
      {currentStep === 2 && <OnboardingScreen2 />}
      {currentStep === 3 && <OnboardingScreen3 />}
      {currentStep === 4 && <OnboardingScreen4 />}
    </OnboardingLayout>
  );
};

export default Onboarding;
