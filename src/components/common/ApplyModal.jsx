import React, { useState } from 'react'
import { X, Upload } from 'lucide-react'
import ApplicationSuccessModal from './ApplicationSuccessModal'

const ApplyModal = ({ isOpen, onClose, jobTitle, company, logo }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
    coverLetter: '',
  })
  const [isDragActive, setIsDragActive] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileSelect = (file) => {
    if (file && (file.type === 'application/pdf' || file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx'))) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }))
    } else {
      alert('Please upload a valid resume file (PDF, DOC, or DOCX)')
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleBrowse = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    // Show success modal instead of closing
    setShowSuccess(true)
    handleReset()
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      resume: null,
      coverLetter: '',
    })
  }

  if (!isOpen) return null

  // If success modal is shown, don't render the form
  if (showSuccess) {
    return (
      <ApplicationSuccessModal
        isOpen={true}
        onClose={() => {
          setShowSuccess(false)
          onClose()
        }}
        onKeepBrowsing={() => {
          setShowSuccess(false)
          onClose()
        }}
        jobTitle={jobTitle}
        company={company}
        logo={logo}
      />
    )
  }

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2 border border-[#E0D6C0] rounded-lg focus:outline-none focus:border-[#0B8B8B] bg-[#F9F7F3] text-[#0B0B0B]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-2 border border-[#E0D6C0] rounded-lg focus:outline-none focus:border-[#0B8B8B] bg-[#F9F7F3] text-[#0B0B0B]"
            />
          </div>

          {/* Resume / CV */}
          <div>
            <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
              Resume / CV
            </label>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragActive
                  ? 'border-[#0B8B8B] bg-[#D4F1F4]'
                  : 'border-[#E0D6C0] bg-[#F9F7F3]'
              }`}
            >
              <Upload size={32} className="mx-auto text-[#484849] mb-2" />
              <p className="text-sm text-[#484849] mb-1">
                Drag and drop or{' '}
                <label className="text-[#0B8B8B] cursor-pointer font-semibold hover:underline">
                  browse here
                  <input
                    type="file"
                    onChange={handleBrowse}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </label>
              </p>
              <p className="text-xs text-[#484849]">PDF, DOC, MAX 5MB</p>
              {formData.resume && (
                <p className="text-sm text-[#0B8B8B] font-semibold mt-2">
                  ✓ {formData.resume.name}
                </p>
              )}
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-semibold text-[#0B0B0B] mb-2">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Why are you a good fit for this role?"
              rows="4"
              className="w-full px-4 py-2 border border-[#E0D6C0] rounded-lg focus:outline-none focus:border-[#0B8B8B] bg-[#F9F7F3] text-[#0B0B0B] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors mt-6 cursor-pointer"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplyModal
