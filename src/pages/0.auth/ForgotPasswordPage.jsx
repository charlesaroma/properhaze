import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

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
      <div className="h-screen flex font-sans overflow-hidden">
        {/* Left Side - Visual Section with Logo, Background, and Images */}
        <div className="hidden md:block w-full max-w-[375px] relative overflow-hidden">
          {/* Glass.png background overlay */}
          <div className="absolute inset-0 bg-[url('/Glass.png')] bg-cover bg-center bg-no-repeat"></div>
          
          {/* Logo Outline positioned absolutely behind everything */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/logo-outline.png" 
              alt="Logo Outline" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Top Left Logo */}
          <div className="relative z-10 p-8">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/Logo.png" alt="Properhaze Logo" className="h-12 w-auto" />
            </Link>
          </div>
          
          {/* Nachristos.png image positioned at the bottom */}
          <div className="absolute -bottom-18 left-0 right-0 flex items-center justify-center z-5">
            <div className="relative max-w-full h-full">
              <img
                src="/nachristos.png"
                alt="Success image"
                className="w-full h-full object-cover rounded-t-2xl shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Success+Image";
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Success Message */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[var(--color-cream-canvas)] overflow-y-auto overflow-x-hidden">
          <div className="w-full max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon
                icon="mdi:check"
                className="w-8 h-8 text-green-600"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-black-canvas)] mb-2">
              Check your email
            </h2>
            <p className="text-[var(--color-placeholder)] mb-4 text-sm">
              We've sent a password reset link to your email address.
            </p>
            <button
              onClick={() => navigateTo("login")}
              className="w-full bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] py-2 rounded-lg font-semibold hover:bg-[var(--color-black-canvas)]/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex font-sans overflow-hidden">
      {/* Left Side - Visual Section with Logo, Background, and Images */}
      <div className="hidden md:block w-full max-w-[375px] relative overflow-hidden">
        {/* Glass.png background overlay */}
        <div className="absolute inset-0 bg-[url('/Glass.png')] bg-cover bg-center bg-no-repeat"></div>
        
        {/* Logo Outline positioned absolutely behind everything */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/images/logo-outline.png" 
            alt="Logo Outline" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Top Left Logo */}
        <div className="relative z-10 p-8">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/Logo.png" alt="Properhaze Logo" className="h-12 w-auto" />
          </Link>
        </div>
        
        {/* Nachristos.png image positioned at the bottom */}
        <div className="absolute -bottom-18 left-0 right-0 flex items-center justify-center z-5">
          <div className="relative max-w-full h-full">
            <img
              src="/images/nachristos.png"
              alt="Forgot password image"
              className="w-full h-full object-cover rounded-t-2xl shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Forgot+Password+Image";
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[var(--color-cream-canvas)] overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-black-canvas)] mb-1 md:mb-2">
            Forgot your password?
          </h2>
          <p className="text-[var(--color-placeholder)] mb-4 md:mb-6 text-sm">
            No worries, we'll send you reset instructions.
          </p>

          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-3 md:space-y-4">
                <div>
                  <label
                    htmlFor="email-forgot"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
                  >
                    Email
                  </label>
                  <Field
                    id="email-forgot"
                    type="email"
                    name="email"
                    placeholder="myname@email.com"
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

                <button
                  type="submit"
                  disabled={isLoading || isSubmitting}
                  className="w-full bg-[var(--color-black-canvas)] text-[var(--color-cream-canvas)] py-2 rounded-lg font-semibold hover:bg-[var(--color-black-canvas)]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  {isLoading ? (
                    <Icon
                      icon="mdi:loading"
                      className="w-4 h-4 animate-spin mr-2"
                    />
                  ) : (
                    "Send reset link"
                  )}
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center mt-3 md:mt-4 text-sm text-[var(--color-black-canvas)]">
            Remember your password?{" "}
            <button
              onClick={() => navigateTo("login")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 font-semibold focus:outline-none"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
