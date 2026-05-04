import React from 'react'
import { CheckCircle2, X } from 'lucide-react'

const ApplicationSuccessModal = ({ isOpen, onClose, onKeepBrowsing, jobTitle, company, logo }) => {
  // Generate random confirmation ID
  const generateConfirmationId = () => {
    return 'PWW-' + Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  const confirmationId = generateConfirmationId()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-[#E0D6C0]">
          <div>
            <h2 className="text-lg font-bold text-[#0B0B0B]">Apply for this role</h2>
            <p className="text-sm text-[#484849] mt-1">{jobTitle} at {company}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#484849] hover:text-[#0B0B0B] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success Content */}
        <div className="p-6 space-y-6 text-center">
          {/* Success Icon */}
          <div className="flex justify-center">
            <CheckCircle2 size={64} className="text-[#0B8B8B]" />
          </div>

          {/* Success Message */}
          <div>
            <h3 className="text-2xl font-bold text-[#0B0B0B] mb-2">
              Application Sent!
            </h3>
            <p className="text-[#484849] text-sm leading-relaxed">
              Excellent! Your application for {jobTitle} has been successfully submitted to {company}.
            </p>
          </div>

          {/* Confirmation ID Section */}
          <div className="bg-[#F9F7F3] rounded-lg p-4">
            <p className="text-xs font-semibold text-[#484849] mb-3 uppercase tracking-wide">
              Confirmation ID
            </p>
            <p className="text-lg font-bold text-[#0B0B0B] mb-4">{confirmationId}</p>

            {/* Job Card */}
            <div className="bg-white rounded-lg p-4 border border-[#E0D6C0]">
              <div className="flex gap-3 items-center">
                {/* Logo */}
                <div className="shrink-0 w-12 h-12 bg-[#063D2E] rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt={company}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Job Info */}
                <div className="text-left flex-1">
                  <h4 className="font-bold text-[#0B0B0B] text-sm">{jobTitle}</h4>
                  <p className="text-xs text-[#484849]">{company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={onKeepBrowsing}
              className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer"
            >
              Keep Browsing
            </button>
            <button
              onClick={() => alert('View My Application - Feature coming soon!')}
              className="w-full px-6 py-3 bg-[#D3C085] text-[#0B0B0B] font-semibold rounded-lg hover:bg-[#c4b176] transition-colors cursor-pointer"
            >
              View My Application
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSuccessModal
