
import React from "react";
import AuthLayout from "@/components/AuthLayout";
import { ForgotPasswordForm } from "@/components/AuthComponents";

const ForgotPassword = () => {
  return (
    <AuthLayout
      title="Şifremi Unuttum"
      subtitle="Şifrenizi sıfırlamak için e-posta adresinizi girin"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
