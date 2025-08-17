import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// Form Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});

// Development Admin Credentials (Remove in production)
const ADMIN_CREDENTIALS = {
  email: "admin@properhaze.com",
  password: "admin123"
};

/**
 * Login Page Component
 * 
 * Features:
 * - User authentication form
 * - Form validation with Yup
 * - Responsive design (mobile/desktop)
 * - Visual branding section
 * - Error handling and loading states
 * 
 * Props:
 * @param {Function} navigateTo - Navigation callback function
 */
export const LoginPage = ({ navigateTo }) => {
  // Component State
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Form Submission Handler
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setIsLoading(true);
    setLoginError("");

    // Authentication Logic (Replace with actual API call)
    if (values.email === ADMIN_CREDENTIALS.email && values.password === ADMIN_CREDENTIALS.password) {
      // Simulate API call delay
      setTimeout(() => {
        setIsLoading(false);
        setSubmitting(false);
        navigateTo("dashboard"); // Navigate to dashboard on successful login
      }, 1000);
    } else {
      // Simulate API call delay for error
      setTimeout(() => {
        setIsLoading(false);
        setSubmitting(false);
        setLoginError("Invalid email or password. Please try again.");
        setFieldError("password", "Invalid credentials");
      }, 1000);
    }
  };

  return (
    <div className="h-screen flex font-sans overflow-hidden">
      
      {/* Left Panel - Branding & Visual Elements */}
      <div className="hidden md:block w-full max-w-[375px] relative overflow-hidden">
        {/* Background Glass Effect */}
        <div className="absolute inset-0 bg-[url('/Glass.png')] bg-cover bg-center bg-no-repeat"></div>
        
        {/* Logo Outline Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/images/logo-outline.png" 
            alt="Logo Outline" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Top Left Logo */}
        <div className="relative z-10 p-8">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img src="/images/Logo.png" alt="Properhaze Logo" className="h-12 w-auto" />
          </Link>
        </div>
        
        {/* Bottom Kweba Image */}
        <div className="absolute -bottom-18 left-0 right-0 flex items-center justify-center z-5">
          <div className="relative max-w-full h-full">
            <img
              src="/images/kweba.png"
              alt="Happy people"
              className="w-full h-full object-cover rounded-t-2xl shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Kweba+Image";
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[var(--color-cream-canvas)] overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-md">
          {/* Page Header */}
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-black-canvas)] mb-1 md:mb-2">
            Welcome to Properhaze
          </h2>
          <p className="text-[var(--color-placeholder)] mb-4 md:mb-6 text-sm">
            Please log into your account below
          </p>

          {/* Admin Credentials Info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-medium mb-2">🔑 Temporary Admin Credentials:</p>
            <div className="text-xs text-blue-700 space-y-1">
              <p><strong>Email:</strong> admin@properhaze.com</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>

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
              <Form className="space-y-3 md:space-y-4">
                <div>
                  <label
                    htmlFor="email-login"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
                  >
                    Email
                  </label>
                  <Field
                    id="email-login"
                    type="email"
                    name="email"
                    placeholder=""
                    className={`w-full px-3 py-2 border border-[var(--color-border)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] ${
                      errors.email && touched.email ? "border-[var(--color-error)]" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-[var(--color-error)] text-xs mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password-login"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password-login"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className={`w-full px-3 py-2 border border-[var(--color-border)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] pr-12 ${
                        errors.password && touched.password ? "border-[var(--color-error)]" : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-placeholder)] hover:text-[var(--color-black-canvas)] focus:outline-none cursor-pointer"
                    >
                      <Icon
                        icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-[var(--color-error)] text-xs mt-1"
                  />
                </div>

                {/* Login Error Display */}
                {loginError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">{loginError}</p>
                  </div>
                )}

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
                    className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 focus:outline-none cursor-pointer"
                  >
                    Forgot Password
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || isSubmitting}
                  className="w-full bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] py-2 rounded-lg font-semibold hover:bg-[var(--color-black-canvas)]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                >
                  {isLoading ? (
                    <Icon
                      icon="mdi:loading"
                      className="w-4 h-4 animate-spin mr-2"
                    />
                  ) : (
                    "Login"
                  )}
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center mt-3 md:mt-4 text-sm text-[var(--color-black-canvas)]">
            New to Properhaze?{" "}
            <button
              onClick={() => navigateTo("signup")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-semibold focus:outline-none cursor-pointer"
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
