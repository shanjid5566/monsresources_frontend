import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{10,}$/;

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEmployerRegister = location.state?.isEmployerRegister || false;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyLocation: '',
    companyHeadcountSize: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errs = {};

    if (!formData.firstName.trim()) {
      errs.firstName = 'First name is required.';
    }

    if (!formData.lastName.trim()) {
      errs.lastName = 'Last name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!PHONE_REGEX.test(formData.phone.replace(/\D/g, ''))) {
      errs.phone = 'Phone number must be at least 10 digits.';
    }

    if (isEmployerRegister) {
      if (!formData.companyLocation.trim()) {
        errs.companyLocation = 'Company location is required.';
      }

      if (!formData.companyHeadcountSize.trim()) {
        errs.companyHeadcountSize = 'Company headcount size is required.';
      }
    }

    if (!formData.password) {
      errs.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      errs.password = 'Password must be at least 8 characters.';
    }

    if (!formData.confirmPassword) {
      errs.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      setTimeout(() => {
        // In a real app, you would send this data to the backend
        console.log('Registration data:', formData);
        
        // For now, redirect to login page
        alert('Registration successful! Please log in.');
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2">
        <img
          src="/authentication/register.png"
          alt="Register Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 bg-[#F9F7F3] overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Back Button */}
          <div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 border border-[#063D2E] text-[#063D2E] rounded hover:bg-[#F0EFEA] cursor-pointer"
              aria-label="Go back"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#000000] mb-2">
              {isEmployerRegister ? 'Create Employer Account' : 'Create Account'}
            </h1>
            <p className="text-[#373737]">
              {isEmployerRegister 
                ? 'Sign up to start hiring and managing job postings.' 
                : 'Sign up to get started with our platform.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#000000] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name..."
                  className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#000000] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name..."
                  className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#000000] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email here..."
                className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-[#000000] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number..."
                className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Conditional Employer Fields */}
            {isEmployerRegister && (
              <div className="grid grid-cols-2 gap-4">
                {/* Company Location */}
                <div>
                  <label className="block text-sm font-semibold text-[#000000] mb-2">
                    Company Location
                  </label>
                  <input
                    type="text"
                    name="companyLocation"
                    value={formData.companyLocation}
                    onChange={handleChange}
                    placeholder="Enter your company address..."
                    className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                  />
                  {errors.companyLocation && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyLocation}</p>
                  )}
                </div>

                {/* Company Headcount Size */}
                <div>
                  <label className="block text-sm font-semibold text-[#000000] mb-2">
                    Company Headcount Size
                  </label>
                  <input
                    type="text"
                    name="companyHeadcountSize"
                    value={formData.companyHeadcountSize}
                    onChange={handleChange}
                    placeholder="Enter your company headcount size..."
                    className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                  />
                  {errors.companyHeadcountSize && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyHeadcountSize}</p>
                  )}
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#000000] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password here..."
                  className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#373737] hover:text-[#000000]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-[#000000] mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password..."
                  className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#373737] hover:text-[#000000]"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-6"
            >
              {isLoading ? (isEmployerRegister ? 'Creating Employer Account...' : 'Creating Account...') : (isEmployerRegister ? 'Create Employer Account' : 'Sign Up')}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-[#373737]">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-[#063D2E] hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
