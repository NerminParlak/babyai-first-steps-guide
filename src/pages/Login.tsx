
import React from "react";
import AuthLayout from "@/components/AuthLayout";
import { EmailLoginForm, SocialAuthButtons } from "@/components/AuthComponents";

const Login = () => {
  return (
    <AuthLayout
      title="Hoş Geldiniz"
      subtitle="BabyAI hesabınıza giriş yapın"
      showBackButton={false}
    >
      <SocialAuthButtons />
      <EmailLoginForm />
    </AuthLayout>
  );
};

export default Login;
