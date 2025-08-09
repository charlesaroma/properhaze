import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
        
        {/* Van.png image positioned in the center */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-80 h-80">
            <img
              src="/van.png"
              alt="Van image"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            onError={(e) => {
              e.target.onerror = null;
                e.target.src = "https://placehold.co/320x320/667EEA/ffffff?text=Van+Image";
            }}
          />
        </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[var(--color-cream-canvas)] md:p-12 lg:p-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[var(--color-black-canvas)] mb-2">Sign Up</h2>
          <p className="text-[var(--color-placeholder)] mb-8">
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
              <Form className="space-y-6">
            <div>
              <label
                htmlFor="full-name"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Full name
              </label>
                  <Field
                id="full-name"
                type="text"
                name="fullName"
                placeholder="Robin Inzama"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] ${
                      errors.fullName && touched.fullName ? "border-[var(--color-error)]" : "border-[var(--color-border)]"
                    }`}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="p"
                    className="text-[var(--color-error)] text-sm mt-1"
                  />
            </div>

            <div>
              <label
                htmlFor="email-signup"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Email
              </label>
                  <Field
                id="email-signup"
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
                htmlFor="phone-number"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Phone number
              </label>
                  <Field
                id="phone-number"
                type="tel"
                name="phoneNumber"
                placeholder="+254 71 000 000"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] ${
                      errors.phoneNumber && touched.phoneNumber ? "border-[var(--color-error)]" : "border-[var(--color-border)]"
                    }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="text-[var(--color-error)] text-sm mt-1"
                  />
            </div>

            <div>
              <label
                htmlFor="create-password"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Create Password
              </label>
              <div className="relative">
                    <Field
                  id="create-password"
                      type="password"
                  name="password"
                  placeholder="mypassword"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] pr-12 ${
                        errors.password && touched.password ? "border-[var(--color-error)]" : "border-[var(--color-border)]"
                  }`}
                />
                <button
                  type="button"
                      onClick={() => {
                        const input = document.getElementById('create-password');
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

            <div>
              <label
                htmlFor="confirm-password"
                    className="block text-sm font-medium text-[var(--color-black-canvas)] mb-2"
              >
                Confirm password
              </label>
              <div className="relative">
                    <Field
                  id="confirm-password"
                      type="password"
                  name="confirmPassword"
                  placeholder="mypassword"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-all duration-200 bg-white text-[var(--color-black-canvas)] placeholder-[var(--color-placeholder)] pr-12 ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-[var(--color-error)]"
                          : "border-[var(--color-border)]"
                      }`}
                />
                <button
                  type="button"
                      onClick={() => {
                        const input = document.getElementById('confirm-password');
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
                    name="confirmPassword"
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
                "Sign Up"
              )}
            </button>

                <div className="text-center text-sm text-[var(--color-placeholder)] space-y-2">
              <p>
                Accept the{" "}
                <button
                      type="button"
                  onClick={() => alert("Navigating to Terms of Use (mock)")}
                      className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 focus:outline-none"
                >
                  Terms of use
                </button>
              </p>
              <p>
                Accept the{" "}
                <button
                      type="button"
                  onClick={() => alert("Navigating to Privacy Policy (mock)")}
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
