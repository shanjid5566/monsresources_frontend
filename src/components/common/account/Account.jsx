import React, { useState } from "react";
import { Upload, User, Lock, FileText, Building2, Users } from "lucide-react";
import { useSelector } from "react-redux";

const Account = ({ userType = "user" }) => {
  // Get user from Redux if not provided as prop
  const reduxUser = useSelector((state) => state.auth.user);
  const role = userType || reduxUser?.role || "user";

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "example@gmail.com",
    phone: "+1 (555) 000-1032",
    companyLocation: "",
    companyHeadcount: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState(
    "https://ui-avatars.com/api/?name=John+Doe&background=063D2E&color=fff&size=128"
  );
  const [resumeFile, setResumeFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setResumeFile(files[0]);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  const handleSaveChanges = () => {
    // Validate form data based on role
    if (role === "admin") {
      // Admin: only name, email, password
      if (!formData.firstName || !formData.email) {
        alert("Please fill in all required fields");
        return;
      }
    } else if (role === "hr") {
      // HR: name, email, phone, company location, headcount
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone ||
        !formData.companyLocation ||
        !formData.companyHeadcount
      ) {
        alert("Please fill in all personal information fields");
        return;
      }
    } else {
      // User: all personal information
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone
      ) {
        alert("Please fill in all personal information fields");
        return;
      }
    }

    // Validate password if changing
    if (
      passwordData.oldPassword ||
      passwordData.newPassword ||
      passwordData.confirmPassword
    ) {
      if (!passwordData.oldPassword) {
        alert("Please enter your old password");
        return;
      }
      if (!passwordData.newPassword) {
        alert("Please enter your new password");
        return;
      }
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        alert("New passwords do not match");
        return;
      }
      if (passwordData.newPassword.length < 6) {
        alert("New password must be at least 6 characters");
        return;
      }
    }

    // Success
    setSuccessMessage("Account settings saved successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);

    // Clear password fields
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    console.log("Form Data:", formData);
    console.log("Password Data:", passwordData);
    console.log("Resume File:", resumeFile);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B0B0B] mb-2">
            Account
          </h1>
          <p className="text-base text-[#484849]">
            Save your account details for quick access
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-[#063D2E] text-white rounded-lg text-sm font-medium">
            {successMessage}
          </div>
        )}

        {/* Main Content */}
        <div className="bg-[#f8f4e8] rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Profile Picture Section - Show for user and HR */}
          {(role === "user" || role === "hr") && (
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#063D2E]"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0B0B0B] mb-2 flex items-center gap-2">
                    <User size={20} className="text-[#063D2E]" />
                    Profile Picture
                  </h3>
                  <p className="text-sm text-[#484849] mb-4">
                    Upload a professional photo for your user profile.
                  </p>
                  <label className="inline-flex items-center px-4 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors cursor-pointer">
                    <Upload size={16} className="mr-2" />
                    Choose Photo
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleProfileImageUpload}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Personal Information Section - Conditional based on role */}
          {(role === "user" || role === "hr" || role === "admin") && (
            <div className="mb-8 pb-8">
              <h3 className="text-lg font-semibold text-[#0B0B0B] mb-6">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                    placeholder="Enter first name"
                  />
                </div>

                {/* Last Name - Hide for admin */}
                {role !== "admin" && (
                  <div>
                    <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                      placeholder="Enter last name"
                    />
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone Number - Show for user and HR */}
              {(role === "user" || role === "hr") && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              )}

              {/* Company Location - Show only for HR */}
              {role === "hr" && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-[#0B0B0B] mb-2 flex items-center gap-2">
                    <Building2 size={16} className="text-[#063D2E]" />
                    Company Location
                  </label>
                  <input
                    type="text"
                    name="companyLocation"
                    value={formData.companyLocation}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                    placeholder="e.g., 8902 Preston Rd, Ingewood, Maine 98380"
                  />
                </div>
              )}

              {/* Company Headcount Size - Show only for HR */}
              {role === "hr" && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-[#0B0B0B] mb-2 flex items-center gap-2">
                    <Users size={16} className="text-[#063D2E]" />
                    Company Headcount Size
                  </label>
                  <input
                    type="text"
                    name="companyHeadcount"
                    value={formData.companyHeadcount}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                    placeholder="e.g., 4"
                  />
                </div>
              )}
            </div>
          )}

          {/* Change Password Section - Show for all roles */}
          <div className="pb-8">
            <h3 className="text-lg font-semibold text-[#0B0B0B] mb-2 flex items-center gap-2">
              <Lock size={20} className="text-[#063D2E]" />
              Change Password
            </h3>
            <p className="text-sm text-[#484849] mb-6">
              Leave blank if you don't want to change your password
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                  placeholder="Write old password"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                  placeholder="Write new password"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-[#0B0B0B] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 bg-[#F6F2E8] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#063D2E] transition-all"
                placeholder="Write confirm password"
              />
            </div>
          </div>

          {/* Upload Resume Section - Show only for user */}
          {role === "user" && (
            <div className="mb-8 mt-8">
              <h3 className="text-lg font-semibold text-[#0B0B0B] mb-2 flex items-center gap-2">
                <FileText size={20} className="text-[#063D2E]" />
                Upload Resume
              </h3>
              <p className="text-sm text-[#484849] mb-4">
                Upload your professional resume (PDF, DOC, DOCX)
              </p>

              {/* Drag and Drop Area */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                  dragActive
                    ? "border-[#063D2E] bg-[#F0F7F4]"
                    : "border-gray-300 bg-[#F6F2E8]"
                }`}
              >
                <input
                  type="file"
                  id="resume-upload"
                  onChange={handleResumeUpload}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-[#063D2E] rounded-full flex items-center justify-center">
                    <Upload size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B0B0B]">
                      Drag and drop your resume here
                    </p>
                    <p className="text-sm text-[#484849]">
                      Or click to browse from your computer
                    </p>
                  </div>

                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <button
                      type="button"
                      onClick={() => document.getElementById("resume-upload").click()}
                      className="mt-4 px-6 py-2 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors"
                    >
                      Upload Resume
                    </button>
                  </label>
                </div>

                {/* Resume File Display */}
                {resumeFile && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-800">
                      ✓ {resumeFile.name}
                    </p>
                    <p className="text-xs text-green-600">
                      {(resumeFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Save Changes Button */}
          <div className="flex justify-start gap-4">
            <button
              onClick={handleSaveChanges}
              className="px-8 py-3 bg-[#063D2E] text-white font-semibold rounded-lg hover:bg-[#052d24] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
