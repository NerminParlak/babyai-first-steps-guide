
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if onboarding was completed before
    const onboardingCompleted = localStorage.getItem("onboardingCompleted");
    if (onboardingCompleted === "true") {
      navigate("/login");
    } else {
      navigate("/onboarding");
    }
  }, [navigate]);

  // Render loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-baby-blue">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">BabyAI</h1>
        <div className="flex items-center gap-4 justify-center">
          <div className="w-3 h-3 bg-baby-green rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-baby-pink rounded-full animate-pulse delay-100"></div>
          <div className="w-3 h-3 bg-baby-blue rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
