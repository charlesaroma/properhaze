import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// Validation schema
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Phone number is invalid")
    .required("Phone number is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords must match")
    .required("Confirm password is required"),
});

// Signup Page Component
export const SignupPage = ({ navigateTo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);

    // Mock signup logic
    setTimeout(() => {
      setIsLoading(false);
      setSubmitting(false);
      navigateTo("dashboard"); // Simulate navigation to dashboard
    }, 1500);
  };

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
        
        {/* Van.png image positioned at the bottom */}
        <div className="absolute -bottom-18 left-0 right-0 flex items-center justify-center z-5">
          <div className="relative max-w-full h-full">
            <img
              src="/images/van.png"
              alt="Van image"
              className="w-full h-full object-cover rounded-t-2xl shadow-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Van+Image";
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-8 bg-[var(--color-cream-canvas)] overflow-y-auto overflow-x-hidden">
        <div className="w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-black-canvas)] mb-1 md:mb-2">Sign Up</h2>
          <p className="text-[var(--color-placeholder)] mb-4 md:mb-6 text-sm">
            Create a Properhaze account below
          </p>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-3 md:space-y-4">
            <div>
              <label
                htmlFor="full-name"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
              >
                Full name
              </label>
                  <Field
                id="full-name"
                type="text"
                name="fullName"
                placeholder=""
                    className={`w-full px-3 py-2 border border-[var(--color-border)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] ${
                      errors.fullName && touched.fullName ? "border-[var(--color-error)]" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="p"
                    className="text-[var(--color-error)] text-xs mt-1"
                  />
            </div>

            <div>
              <label
                htmlFor="email-signup"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
              >
                Email
              </label>
                  <Field
                id="email-signup"
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
                htmlFor="phone-number"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
              >
                Phone number
              </label>
                  <Field
                id="phone-number"
                type="tel"
                name="phoneNumber"
                placeholder=""
                    className={`w-full px-3 py-2 border border-[var(--color-border)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] ${
                      errors.phoneNumber && touched.phoneNumber ? "border-[var(--color-error)]" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="text-[var(--color-error)] text-xs mt-1"
                  />
            </div>

            <div>
              <label
                htmlFor="create-password"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
              >
                Create Password
              </label>
              <div className="relative">
                    <Field
                  id="create-password"
                      type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder=""
                      className={`w-full px-3 py-2 border border-[var(--color-border)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] pr-12 ${
                        errors.password && touched.password ? "border-[var(--color-error)]" : ""
                  }`}
                />
                <button
                  type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-placeholder)] hover:text-[var(--color-black-canvas)] focus:outline-none"
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

            <div>
              <label
                htmlFor="confirm-password"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-1"
              >
                Confirm password
              </label>
              <div className="relative">
                    <Field
                  id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder=""
                      className={`w-full px-3 py-2 border border-[var(--color-border)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-border)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] pr-12 ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-[var(--color-error)]"
                          : "border-[var(--color-border)]"
                      }`}
                />
                <button
                  type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-placeholder)] hover:text-[var(--color-black-canvas)] focus:outline-none"
                >
                  <Icon
                        icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"}
                    className="w-4 h-4"
                  />
                </button>
              </div>
                  <ErrorMessage
                    name="confirmPassword"
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
                "Sign Up"
              )}
            </button>

                <div className="text-center text-xs text-[var(--color-placeholder)] space-y-1">
              <p>
                Accept the{" "}
                <button
                      type="button"
                  onClick={() => navigate("/terms")}
                      className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 focus:outline-none"
                >
                  Terms of use
                </button>
              </p>
              <p>
                Accept the{" "}
                <button
                      type="button"
                  onClick={() => navigate("/privacy")}
                      className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 focus:outline-none"
                >
                  Privacy policy
                </button>
              </p>
            </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
