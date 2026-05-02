import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ROUTES = {
  LOGIN: '/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
};

const Otp = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResent, setIsResent] = useState(false);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...code];
    next[index] = value;
    setCode(next);
    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').trim().slice(0, 4).split('');
    if (!pasted.length) return;
    const next = [...code];
    for (let i = 0; i < pasted.length; i++) {
      if (/^[0-9]$/.test(pasted[i])) next[i] = pasted[i];
    }
    setCode(next);
    const lastFilled = Math.min(pasted.length, inputs.current.length) - 1;
    inputs.current[lastFilled]?.focus();
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const value = code.join('');
    if (value.length < 4) return;
    setIsVerifying(true);
    // simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      navigate(ROUTES.ADMIN_DASHBOARD);
    }, 800);
  };

  const handleResend = () => {
    setIsResent(true);
    setTimeout(() => setIsResent(false), 3000);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="hidden lg:flex lg:w-1/2">
        <img
          src="/authentication/otp.jpg"
          alt="OTP background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-8 bg-[#F9F7F3]">
        <div className="w-full max-w-md flex justify-center">
          <div className="w-full max-w-md ">
            <div>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="mb-4 inline-flex items-center gap-2 px-3 py-1 border border-[#D3C085] text-[#063D2E] rounded hover:bg-[#F0EFEA] cursor-pointer"
                aria-label="Go back"
              >
                <ArrowLeft size={16} />
                <span className="text-sm">Back</span>
              </button>
            </div>

            <div className="mb-4">
              <h1 className="text-lg font-semibold text-[#0B0B0B]">OTP Verification</h1>
              <p className="text-sm text-[#373737] mt-2">Enter the verification code we just sent to your email address.</p>
            </div>

            <form onSubmit={handleVerify} className="space-y-5">
              <div className="flex gap-3 justify-center mt-3">
                {code.map((c, i) => (
                  <input
                    key={i}
                    ref={(el) => (inputs.current[i] = el)}
                    value={c}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    onPaste={handlePaste}
                    className={`w-14 h-14 text-center rounded-md text-lg font-medium focus:outline-none bg-white transition-colors ${
                      c ? 'border-2 border-[#063D2E]' : 'border border-[#E6ECEA]'
                    }`}
                  />
                ))}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isVerifying ? 'Verifying...' : 'Verify'}
                </button>
              </div>

              <div className="text-center text-sm text-[#373737]">
                <button type="button" onClick={handleResend} className="font-medium text-[#063D2E] hover:underline">
                  {isResent ? 'Resent ✓' : "Didn't receive a code? Resend"}
                </button>
              </div>

              <div className="mt-2 text-center">
                <Link to={ROUTES.LOGIN} className="text-sm font-semibold text-[#063D2E] hover:underline">Use email to sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
