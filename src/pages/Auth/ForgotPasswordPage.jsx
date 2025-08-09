import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

// Forgot Password Page Component
export const ForgotPasswordPage = ({ navigateTo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);

    // Mock password reset logic
    setTimeout(() => {
      setIsLoading(false);
      setSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
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
          
          {/* Nachristos.png image positioned in the center */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-80 h-80">
              <img
                src="/nachristos.png"
                alt="Success image"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Success+Image";
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Success Message */}
        <div className="flex-1 flex items-center justify-center p-8 bg-[var(--color-cream-canvas)] md:p-12 lg:p-16">
          <div className="w-full max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="mdi:check" className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-black-canvas)] mb-4">
              Check your email
            </h2>
            <p className="text-[var(--color-placeholder)] mb-8">
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
            </p>
            <button
              onClick={() => navigateTo("login")}
              className="w-full bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] py-3 rounded-lg font-semibold hover:bg-[var(--color-black-canvas)]/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Back to Login
            </button>
        </div>
          </div>
      </div>
    );
  }

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
        
        {/* Nachristos.png image positioned in the center */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-80 h-80">
            <img
              src="/nachristos.png"
              alt="Forgot password image"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Forgot+Password+Image";
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[var(--color-cream-canvas)] md:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[var(--color-black-canvas)] mb-2">
            Forgot Password?
          </h2>
          <p className="text-[var(--color-placeholder)] mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
            <div>
                  <label
                    htmlFor="email-forgot"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
                  >
                    Email
                  </label>
                  <Field
                id="email-forgot"
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
                    "Send Reset Link"
              )}
            </button>
              </Form>
            )}
          </Formik>

          <p className="text-center mt-6 text-[var(--color-black-canvas)]">
            Remember your password?{" "}
            <button
              type="button"
              onClick={() => navigateTo("login")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-semibold focus:outline-none"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
