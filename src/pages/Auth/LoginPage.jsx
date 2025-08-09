import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

// Login Page Component
export const LoginPage = ({ navigateTo }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);

    // Mock login logic
    setTimeout(() => {
      setIsLoading(false);
      setSubmitting(false);
      navigateTo("dashboard"); // Simulate navigation to dashboard
    }, 1500);
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Side - Visual Section with Logo, Background, and Images */}
      <div className="flex-1 relative overflow-hidden bg-gradient-to-b from-[#11316b] to-[#1f2937]">
        {/* Glass.png background overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Logo Outline positioned absolutely behind everything */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 rounded-full border-4 border-white/20"></div>
        </div>
        
        {/* Top Left Logo */}
        <div className="relative z-10 p-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Icon icon="mdi:dots-grid" className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Properhaze</span>
          </div>
        </div>
        
        {/* Kweba.png image positioned in the center */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-80 h-80">
            <img
              src="/kweba.png"
              alt="Happy people"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Kweba+Image";
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[var(--color-cream-canvas)] md:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[var(--color-black-canvas)] mb-2">
            Welcome to Properhaze
          </h2>
          <p className="text-[var(--color-placeholder)] mb-8">
            Please log into your account below
          </p>

          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
            <div>
              <label
                htmlFor="email-login"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Email
              </label>
                  <Field
                id="email-login"
                type="email"
                name="email"
                placeholder="myname@email.com"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] ${
                      errors.email && touched.email ? "border-[var(--color-error)]" : "border-[var(--color-border)]"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-[var(--color-error)] text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password-login"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Password
              </label>
              <div className="relative">
                    <Field
                  id="password-login"
                      type="password"
                  name="password"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] pr-12 ${
                        errors.password && touched.password ? "border-[var(--color-error)]" : "border-[var(--color-border)]"
                      }`}
                />
                <button
                  type="button"
                      onClick={() => {
                        const input = document.getElementById('password-login');
                        input.type = input.type === 'password' ? 'text' : 'password';
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-placeholder)] hover:text-[var(--color-black-canvas)] focus:outline-none"
                >
                  <Icon
                        icon="mdi:eye"
                    className="w-5 h-5"
                  />
                </button>
              </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-[var(--color-error)] text-sm mt-1"
                  />
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="remember-me"
                className="flex items-center cursor-pointer"
              >
                    <Field
                  id="remember-me"
                  type="checkbox"
                  name="rememberMe"
                      className="rounded border-[var(--color-border)] text-[var(--color-primary)] shadow-sm focus:ring-[var(--color-primary)]"
                />
                    <span className="ml-2 text-sm text-[var(--color-black-canvas)]">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => navigateTo("forgot-password")}
                    className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 focus:outline-none"
              >
                Forgot Password
              </button>
            </div>

            <button
              type="submit"
                  disabled={isLoading || isSubmitting}
                  className="w-full bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] py-3 rounded-lg font-semibold hover:bg-[var(--color-black-canvas)]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center"
            >
              {isLoading ? (
                <Icon
                  icon="mdi:loading"
                  className="w-5 h-5 animate-spin mr-2"
                />
              ) : (
                "Login"
              )}
            </button>
              </Form>
            )}
          </Formik>

          <p className="text-center mt-6 text-[var(--color-black-canvas)]">
            New to Properhaze?{" "}
            <button
              onClick={() => navigateTo("signup")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-semibold focus:outline-none"
            >
              Sign up
            </button>
          </p>
      </div>
        </div>
    </div>
  );
};

export default LoginPage;
