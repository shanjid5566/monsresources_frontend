import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ROUTES = {
  LOGIN: '/login',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) return setError('Email is required.');
    if (!EMAIL_REGEX.test(email)) return setError('Please enter a valid email address.');

    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      // optionally redirect back to login after a short delay
      setTimeout(() => navigate(ROUTES.LOGIN), 2500);
    }, 1000);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2">
        <img
          src="/authentication/forget_password.jpg"
          alt="Forgot Password Background"
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
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-1">
              Forgot Password
            </h1>
            <p className="text-sm text-[#373737]">Enter your email address linked to your account.</p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#000000] mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder=""
                  className="w-full px-4 py-3 border border-[#E6ECEA] rounded-lg focus:outline-none focus:border-[#063D2E] bg-[#E6ECEA] text-[#373737] placeholder-[#373737]"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Code'}
              </button>
            </form>
          ) : (
            <div className="p-6 bg-white border border-[#E6ECEA] rounded-lg text-center">
              <h2 className="font-semibold text-lg text-[#063D2E] mb-2">Email Sent</h2>
              <p className="text-sm text-[#373737]">A password reset code has been sent to <span className="font-medium">{email}</span>. Redirecting to login…</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-[#373737] text-sm">
              Remember your password?{' '}
              <Link to={ROUTES.LOGIN} className="font-semibold text-[#063D2E] hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
