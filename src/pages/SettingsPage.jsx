import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('basic-info');
  const [isLoading, setIsLoading] = useState(false);

  // Mock user data - in real app this would come from context/API
  const mockUserData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-01',
    location: 'New York, NY',
    bio: 'Passionate about spreading joy and creating delightful moments with confetti surprises.'
  };

  // Basic Info Form Validation Schema
  const basicInfoSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .required('First name is required'),
    lastName: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .required('Last name is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    phone: Yup.string()
      .min(10, 'Phone number must be at least 10 characters')
      .required('Phone number is required'),
    dateOfBirth: Yup.date()
      .max(new Date(), 'Date of birth cannot be in the future')
      .required('Date of birth is required'),
    location: Yup.string()
      .min(2, 'Location must be at least 2 characters')
      .required('Location is required'),
    bio: Yup.string()
      .max(500, 'Bio must be less than 500 characters')
  });

  // Password Form Validation Schema
  const passwordSchema = Yup.object({
    currentPassword: Yup.string()
      .required('Current password is required'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least 1 lowercase character')
      .matches(/[A-Z]/, 'Password must contain at least 1 uppercase character')
      .matches(/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]/, 'Password must contain at least 1 number, symbol, or whitespace character')
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords do not match')
      .required('Please confirm your new password')
  });

  // Social Accounts Form Validation Schema
  const socialAccountsSchema = Yup.object({
    facebook: Yup.string()
      .url('Please enter a valid URL')
      .matches(/^(https?:\/\/)?(www\.)?facebook\.com/, 'Must be a valid Facebook URL'),
    twitter: Yup.string()
      .url('Please enter a valid URL')
      .matches(/^(https?:\/\/)?(www\.)?twitter\.com|^(https?:\/\/)?(www\.)?x\.com/, 'Must be a valid Twitter/X URL'),
    instagram: Yup.string()
      .url('Please enter a valid URL')
      .matches(/^(https?:\/\/)?(www\.)?instagram\.com/, 'Must be a valid Instagram URL'),
    linkedin: Yup.string()
      .url('Please enter a valid URL')
      .matches(/^(https?:\/\/)?(www\.)?linkedin\.com/, 'Must be a valid LinkedIn URL'),
    youtube: Yup.string()
      .url('Please enter a valid URL')
      .matches(/^(https?:\/\/)?(www\.)?youtube\.com/, 'Must be a valid YouTube URL'),
    tiktok: Yup.string()
      .url('Please enter a valid URL')
      .matches(/^(https?:\/\/)?(www\.)?tiktok\.com/, 'Must be a valid TikTok URL')
  });

  // Mock social accounts data
  const mockSocialData = {
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    instagram: 'https://instagram.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    youtube: '',
    tiktok: ''
  };

  // Basic Info Form
  const basicInfoForm = useFormik({
    initialValues: mockUserData,
    validationSchema: basicInfoSchema,
    onSubmit: handleBasicInfoSubmit
  });

  // Password Form
  const passwordForm = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: passwordSchema,
    onSubmit: handlePasswordSubmit
  });

  // Social Accounts Form
  const socialAccountsForm = useFormik({
    initialValues: mockSocialData,
    validationSchema: socialAccountsSchema,
    onSubmit: handleSocialAccountsSubmit
  });

  // Check if forms have been modified
  const isBasicInfoModified = basicInfoForm.dirty;
  const isPasswordModified = passwordForm.dirty;
  const isSocialAccountsModified = socialAccountsForm.dirty;

  // Enhanced cancel handlers with better user feedback
  const handleBasicInfoCancel = () => {
    basicInfoForm.resetForm();
    // Show success message
    console.log('Basic info changes cancelled');
  };

  const handlePasswordCancel = () => {
    passwordForm.resetForm();
    // Show success message
    console.log('Password changes cancelled');
  };

  const handleSocialAccountsCancel = () => {
    socialAccountsForm.resetForm();
    // Show success message
    console.log('Social accounts changes cancelled');
  };

  // Enhanced form submission handlers with better error handling
  const handleBasicInfoSubmit = async (values) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Basic info updated:', values);
      // Update mock data
      Object.assign(mockUserData, values);
      basicInfoForm.resetForm({ values });
      setIsLoading(false);
      // Show success message
      console.log('Basic info saved successfully');
    } catch (error) {
      console.error('Error updating basic info:', error);
      setIsLoading(false);
      // Show error message
      console.error('Failed to save basic info');
    }
  };

  const handlePasswordSubmit = async (values) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Password updated:', values);
      passwordForm.resetForm();
      setIsLoading(false);
      // Show success message
      console.log('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      setIsLoading(false);
      // Show error message
      console.error('Failed to update password');
    }
  };

  const handleSocialAccountsSubmit = async (values) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Social accounts updated:', values);
      Object.assign(mockSocialData, values);
      socialAccountsForm.resetForm({ values });
      setIsLoading(false);
      // Show success message
      console.log('Social accounts saved successfully');
    } catch (error) {
      console.error('Error updating social accounts:', error);
      setIsLoading(false);
      // Show error message
      console.error('Failed to save social accounts');
    }
  };

  // Password requirements checker
  const checkPasswordRequirements = (password) => {
    return {
      minLength: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numberSymbol: /[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]/.test(password)
    };
  };

  const tabs = [
    { id: 'basic-info', label: 'Basic Info', icon: 'mdi:account' },
    { id: 'password', label: 'Password', icon: 'mdi:lock' },
    { id: 'social-accounts', label: 'Social Accounts', icon: 'mdi:share-variant' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black-canvas via-black-canvas to-gray-900 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-cream-canvas mb-2">Settings</h1>
          <p className="text-placeholder">Manage your account preferences and information</p>
        </div>

        {/* Tabs */}
        <div
          className="mb-8"
        >
          <div className="flex space-x-1 bg-black-canvas/50 backdrop-blur-md rounded-lg p-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-placeholder hover:text-cream-canvas hover:bg-black-canvas/30'
                }`}
              >
                <Icon icon={tab.icon} className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div
          key={activeTab}
          className="bg-black-canvas/50 backdrop-blur-md rounded-xl border border-border p-8"
        >
          {activeTab === 'basic-info' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-cream-canvas mb-2">Basic Information</h2>
                <p className="text-placeholder">Update your personal information and contact details</p>
              </div>

              <form onSubmit={basicInfoForm.handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-cream-canvas mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={basicInfoForm.handleChange}
                      onBlur={basicInfoForm.handleBlur}
                      value={basicInfoForm.values.firstName}
                      className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        basicInfoForm.touched.firstName && basicInfoForm.errors.firstName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {basicInfoForm.touched.firstName && basicInfoForm.errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-cream-canvas mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={basicInfoForm.handleChange}
                      onBlur={basicInfoForm.handleBlur}
                      value={basicInfoForm.values.lastName}
                      className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        basicInfoForm.touched.lastName && basicInfoForm.errors.lastName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {basicInfoForm.touched.lastName && basicInfoForm.errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.lastName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cream-canvas mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={basicInfoForm.handleChange}
                      onBlur={basicInfoForm.handleBlur}
                      value={basicInfoForm.values.email}
                      className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        basicInfoForm.touched.email && basicInfoForm.errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {basicInfoForm.touched.email && basicInfoForm.errors.email && (
                      <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cream-canvas mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={basicInfoForm.handleChange}
                      onBlur={basicInfoForm.handleBlur}
                      value={basicInfoForm.values.phone}
                      className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        basicInfoForm.touched.phone && basicInfoForm.errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {basicInfoForm.touched.phone && basicInfoForm.errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.phone}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-cream-canvas mb-2">
                      Date of Birth *
                    </label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      onChange={basicInfoForm.handleChange}
                      onBlur={basicInfoForm.handleBlur}
                      value={basicInfoForm.values.dateOfBirth}
                      className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        basicInfoForm.touched.dateOfBirth && basicInfoForm.errors.dateOfBirth
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                    />
                    {basicInfoForm.touched.dateOfBirth && basicInfoForm.errors.dateOfBirth && (
                      <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.dateOfBirth}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-cream-canvas mb-2">
                      Location *
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      onChange={basicInfoForm.handleChange}
                      onBlur={basicInfoForm.handleBlur}
                      value={basicInfoForm.values.location}
                      className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        basicInfoForm.touched.location && basicInfoForm.errors.location
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-border focus:border-primary'
                      }`}
                      placeholder="Enter your location"
                    />
                    {basicInfoForm.touched.location && basicInfoForm.errors.location && (
                      <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.location}</p>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-cream-canvas mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows={4}
                    onChange={basicInfoForm.handleChange}
                    onBlur={basicInfoForm.handleBlur}
                    value={basicInfoForm.values.bio}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                      basicInfoForm.touched.bio && basicInfoForm.errors.bio
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="Tell us about yourself..."
                  />
                  {basicInfoForm.touched.bio && basicInfoForm.errors.bio && (
                    <p className="mt-1 text-sm text-red-500">{basicInfoForm.errors.bio}</p>
                  )}
                  <p className="mt-1 text-sm text-placeholder">
                    {basicInfoForm.values.bio.length}/500 characters
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={handleBasicInfoCancel}
                    className="px-6 py-3 text-cream-canvas border border-border rounded-lg hover:bg-black-canvas/30 hover:border-accent hover:text-accent transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!isBasicInfoModified || !basicInfoForm.isValid || isLoading}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isBasicInfoModified && basicInfoForm.isValid && !isLoading
                        ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 active:scale-95'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </div>
                    ) : (
                      'Save Details'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'password' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-cream-canvas mb-2">Password Settings</h2>
                <p className="text-placeholder">Update your password to keep your account secure</p>
              </div>

              <form onSubmit={passwordForm.handleSubmit} className="space-y-6">
                {/* Current Password */}
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-cream-canvas mb-2">
                    Current Password *
                  </label>
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    onChange={passwordForm.handleChange}
                    onBlur={passwordForm.handleBlur}
                    value={passwordForm.values.currentPassword}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      passwordForm.touched.currentPassword && passwordForm.errors.currentPassword
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="Enter your current password"
                  />
                  {passwordForm.touched.currentPassword && passwordForm.errors.currentPassword && (
                    <p className="mt-1 text-sm text-red-500">{passwordForm.errors.currentPassword}</p>
                  )}
                </div>

                {/* New Password */}
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-cream-canvas mb-2">
                    New Password *
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    onChange={passwordForm.handleChange}
                    onBlur={passwordForm.handleBlur}
                    value={passwordForm.values.newPassword}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      passwordForm.touched.newPassword && passwordForm.errors.newPassword
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="Enter your new password"
                  />
                  {passwordForm.touched.newPassword && passwordForm.errors.newPassword && (
                    <p className="mt-1 text-sm text-red-500">{passwordForm.errors.newPassword}</p>
                  )}
                  
                  {/* Password Requirements */}
                  <div className="mt-3 p-3 bg-black-canvas/30 rounded-lg border border-border">
                    <p className="text-sm font-medium text-cream-canvas mb-2">Password Requirements:</p>
                    <div className="space-y-1">
                      {(() => {
                        const requirements = checkPasswordRequirements(passwordForm.values.newPassword);
                        return (
                          <>
                            <div className={`flex items-center space-x-2 text-sm ${
                              requirements.minLength ? 'text-green-500' : 'text-placeholder'
                            }`}>
                              <Icon icon={requirements.minLength ? 'mdi:check-circle' : 'mdi:circle-outline'} className="w-4 h-4" />
                              <span>Minimum 8 characters</span>
                            </div>
                            <div className={`flex items-center space-x-2 text-sm ${
                              requirements.lowercase ? 'text-green-500' : 'text-placeholder'
                            }`}>
                              <Icon icon={requirements.lowercase ? 'mdi:check-circle' : 'mdi:circle-outline'} className="w-4 h-4" />
                              <span>At least 1 lowercase character</span>
                            </div>
                            <div className={`flex items-center space-x-2 text-sm ${
                              requirements.uppercase ? 'text-green-500' : 'text-placeholder'
                            }`}>
                              <Icon icon={requirements.uppercase ? 'mdi:check-circle' : 'mdi:circle-outline'} className="w-4 h-4" />
                              <span>At least 1 uppercase character</span>
                            </div>
                            <div className={`flex items-center space-x-2 text-sm ${
                              requirements.numberSymbol ? 'text-green-500' : 'text-placeholder'
                            }`}>
                              <Icon icon={requirements.numberSymbol ? 'mdi:check-circle' : 'mdi:circle-outline'} className="w-4 h-4" />
                              <span>At least 1 number, symbol, or whitespace character</span>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-cream-canvas mb-2">
                    Confirm New Password *
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={passwordForm.handleChange}
                    onBlur={passwordForm.handleBlur}
                    value={passwordForm.values.confirmPassword}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      passwordForm.touched.confirmPassword && passwordForm.errors.confirmPassword
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="Confirm your new password"
                  />
                  {passwordForm.touched.confirmPassword && passwordForm.errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{passwordForm.errors.confirmPassword}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={handlePasswordCancel}
                    className="px-6 py-3 text-cream-canvas border border-border rounded-lg hover:bg-black-canvas/30 hover:border-accent hover:text-accent transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!isPasswordModified || !passwordForm.isValid || isLoading}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isPasswordModified && passwordForm.isValid && !isLoading
                        ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 active:scale-95'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </div>
                    ) : (
                      'Save Details'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'social-accounts' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-cream-canvas mb-2">Social Accounts</h2>
                <p className="text-placeholder">Connect your social media profiles</p>
              </div>

              <form onSubmit={socialAccountsForm.handleSubmit} className="space-y-6">
                {/* Facebook */}
                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium text-cream-canvas mb-2">
                    Facebook URL
                  </label>
                  <input
                    id="facebook"
                    name="facebook"
                    type="url"
                    onChange={socialAccountsForm.handleChange}
                    onBlur={socialAccountsForm.handleBlur}
                    value={socialAccountsForm.values.facebook}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      socialAccountsForm.touched.facebook && socialAccountsForm.errors.facebook
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="https://facebook.com/yourusername"
                  />
                  {socialAccountsForm.touched.facebook && socialAccountsForm.errors.facebook && (
                    <p className="mt-1 text-sm text-red-500">{socialAccountsForm.errors.facebook}</p>
                  )}
                </div>

                {/* Twitter */}
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-cream-canvas mb-2">
                    Twitter URL
                  </label>
                  <input
                    id="twitter"
                    name="twitter"
                    type="url"
                    onChange={socialAccountsForm.handleChange}
                    onBlur={socialAccountsForm.handleBlur}
                    value={socialAccountsForm.values.twitter}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      socialAccountsForm.touched.twitter && socialAccountsForm.errors.twitter
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="https://twitter.com/yourusername"
                  />
                  {socialAccountsForm.touched.twitter && socialAccountsForm.errors.twitter && (
                    <p className="mt-1 text-sm text-red-500">{socialAccountsForm.errors.twitter}</p>
                  )}
                </div>

                {/* Instagram */}
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-cream-canvas mb-2">
                    Instagram URL
                  </label>
                  <input
                    id="instagram"
                    name="instagram"
                    type="url"
                    onChange={socialAccountsForm.handleChange}
                    onBlur={socialAccountsForm.handleBlur}
                    value={socialAccountsForm.values.instagram}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      socialAccountsForm.touched.instagram && socialAccountsForm.errors.instagram
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="https://instagram.com/yourusername"
                  />
                  {socialAccountsForm.touched.instagram && socialAccountsForm.errors.instagram && (
                    <p className="mt-1 text-sm text-red-500">{socialAccountsForm.errors.instagram}</p>
                  )}
                </div>

                {/* LinkedIn */}
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-cream-canvas mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    onChange={socialAccountsForm.handleChange}
                    onBlur={socialAccountsForm.handleBlur}
                    value={socialAccountsForm.values.linkedin}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      socialAccountsForm.touched.linkedin && socialAccountsForm.errors.linkedin
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="https://linkedin.com/in/yourusername"
                  />
                  {socialAccountsForm.touched.linkedin && socialAccountsForm.errors.linkedin && (
                    <p className="mt-1 text-sm text-red-500">{socialAccountsForm.errors.linkedin}</p>
                  )}
                </div>

                {/* YouTube */}
                <div>
                  <label htmlFor="youtube" className="block text-sm font-medium text-cream-canvas mb-2">
                    YouTube URL
                  </label>
                  <input
                    id="youtube"
                    name="youtube"
                    type="url"
                    onChange={socialAccountsForm.handleChange}
                    onBlur={socialAccountsForm.handleBlur}
                    value={socialAccountsForm.values.youtube}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      socialAccountsForm.touched.youtube && socialAccountsForm.errors.youtube
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="https://youtube.com/yourchannel"
                  />
                  {socialAccountsForm.touched.youtube && socialAccountsForm.errors.youtube && (
                    <p className="mt-1 text-sm text-red-500">{socialAccountsForm.errors.youtube}</p>
                  )}
                </div>

                {/* TikTok */}
                <div>
                  <label htmlFor="tiktok" className="block text-sm font-medium text-cream-canvas mb-2">
                    TikTok URL
                  </label>
                  <input
                    id="tiktok"
                    name="tiktok"
                    type="url"
                    onChange={socialAccountsForm.handleChange}
                    onBlur={socialAccountsForm.handleBlur}
                    value={socialAccountsForm.values.tiktok}
                    className={`w-full px-4 py-3 bg-black-canvas/80 border rounded-lg text-cream-canvas placeholder-placeholder focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      socialAccountsForm.touched.tiktok && socialAccountsForm.errors.tiktok
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-border focus:border-primary'
                    }`}
                    placeholder="https://tiktok.com/@yourusername"
                  />
                  {socialAccountsForm.touched.tiktok && socialAccountsForm.errors.tiktok && (
                    <p className="mt-1 text-sm text-red-500">{socialAccountsForm.errors.tiktok}</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={handleSocialAccountsCancel}
                    className="px-6 py-3 text-cream-canvas border border-border rounded-lg hover:bg-black-canvas/30 hover:border-accent hover:text-accent transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!isSocialAccountsModified || !socialAccountsForm.isValid || isLoading}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isSocialAccountsModified && socialAccountsForm.isValid && !isLoading
                        ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 active:scale-95'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </div>
                    ) : (
                      'Save Details'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
