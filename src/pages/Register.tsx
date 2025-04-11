
import React from "react";
import AuthLayout from "@/components/AuthLayout";
import { RegisterForm, SocialAuthButtons } from "@/components/AuthComponents";

const Register = () => {
  return (
    <AuthLayout
      title="Hesap Oluşturun"
      subtitle="BabyAI'a hoş geldiniz"
    >
      <SocialAuthButtons />
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
