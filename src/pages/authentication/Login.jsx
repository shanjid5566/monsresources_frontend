import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 8) {
      errs.password = 'Password must be at least 8 characters.';
    }
    return errs;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call - demo accounts
      setTimeout(() => {
        let userRole = 'user';
        let userName = 'User';

        if (email === 'admin@test.com' && password === 'admin123456') {
          userRole = 'admin';
          userName = 'Admin User';
        } else if (email === 'hr@test.com' && password === 'hr123456') {
          userRole = 'hr';
          userName = 'HR Manager';
        } else if (email === 'user@test.com' && password === 'user123456') {
          userRole = 'user';
          userName = 'Employee User';
        } else {
          // Default demo user
          userName = email.split('@')[0];
        }

        dispatch(
          loginSuccess({
            user: {
              id: Math.random(),
              email,
              name: userName,
              role: userRole,
            },
            token: `demo-token-${Date.now()}`,
          })
        );
        
        // Redirect based on role
        if (userRole === 'user') {
          navigate('/user/jobs');
        } else {
          navigate(ROUTES.ADMIN_DASHBOARD);
        }
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2">
        <img
          src="/authentication/login.jpg"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 bg-[#F9F7F3]">
        <div className="w-full max-w-md">
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
              Login to Continue
            </h1>
            <p className="text-[#373737]">
              Sign in to your account to view contact details.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#000000] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: '' });
                }}
                placeholder="Enter your email here..."
                className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#000000] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({ ...errors, password: '' });
                  }}
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

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-[#063D2E] hover:underline"
                >
                  Forgot Password?
                </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-[#373737]">
              Don't Have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-[#063D2E] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-8">
            <p className="text-center text-sm font-semibold text-[#000000] mb-4">Demo Login Credentials</p>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setEmail('user@test.com');
                  setPassword('user123456');
                  setErrors({});
                }}
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <div className="font-medium">User Login</div>
                <div className="text-xs">user@test.com</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setEmail('hr@test.com');
                  setPassword('hr123456');
                  setErrors({});
                }}
                className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors cursor-pointer"
              >
                <div className="font-medium">employee Login</div>
                <div className="text-xs">hr@test.com</div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setEmail('admin@test.com');
                  setPassword('admin123456');
                  setErrors({});
                }}
                className="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors cursor-pointer"
              >
                <div className="font-medium">Admin Login</div>
                <div className="text-xs">admin@test.com</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
