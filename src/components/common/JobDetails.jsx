

import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MapPin,
  Clock,
  CheckCircle2,
  ChevronLeft,
  DollarSign,
  Shield,
  BookOpen,
  Heart,
  Home,
  Palette,
  Users,
  Globe,
  Cpu,
  Building2,
  Eye,
  ChevronDown,
} from "lucide-react";
import { getJobById } from "../../data/jobsData";
import ApplyModal from "./ApplyModal";

// Icon renderer helper
const getIcon = (iconName) => {
  const iconMap = {
    DollarSign,
    Shield,
    BookOpen,
    Heart,
    Home,
    Palette,
    Users,
    Globe,
    Cpu,
  };
  return iconMap[iconName] || DollarSign;
};

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [applicantStates, setApplicantStates] = useState({});

  // Fixed position dropdown state
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });

  const isFromDashboard = location.state?.fromDashboard === true;

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdownId(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on scroll (important since dropdown is fixed)
  useEffect(() => {
    const handleScroll = () => setOpenDropdownId(null);
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  // Sample applicant data
  const initialApplicants = [
    { id: 1, name: "Floyd Miles", location: "London, UK", phone: "(316) 555-0116", appliedDate: "12-4-2022", status: "Shortlist", email: "michelle.rivera@example.com" },
    { id: 2, name: "Devon Lane", location: "Manchester, UK", phone: "(217) 555-0113", appliedDate: "4-2-2022", status: "Rejected", email: "kenzi.lawson@example.com" },
    { id: 3, name: "Theresa Webb", location: "Birmingham, UK", phone: "(305) 555-0105", appliedDate: "2-1-2022", status: "Schedule", email: "tanya.hill@example.com" },
    { id: 4, name: "Guy Hawkins", location: "Leeds, UK", phone: "(229) 555-0109", appliedDate: "13-4-2022", status: "Shortlist", email: "tim.jennings@example.com" },
    { id: 5, name: "Wade Warren", location: "Glasgow, UK", phone: "(205) 555-0100", appliedDate: "17-6-2022", status: "Rejected", email: "alma.lawson@example.com" },
    { id: 6, name: "Darrell Steward", location: "Liverpool, UK", phone: "(307) 555-0133", appliedDate: "14-7-2022", status: "Shortlist", email: "georgia.young@example.com" },
    { id: 7, name: "Ronald Richards", location: "Remote", phone: "(684) 555-0102", appliedDate: "6-3-2022", status: "Rejected", email: "debra.holt@example.com" },
    { id: 8, name: "Courtney Henry", location: "Hybrid (UK)", phone: "(629) 555-0129", appliedDate: "8-9-2022", status: "Rejected", email: "willie.jennings@example.com" },
    { id: 9, name: "Eleanor Pena", location: "Portland, OR", phone: "(704) 555-0127", appliedDate: "9-4-2022", status: "Shortlist", email: "nathan.roberts@example.com" },
  ];

  const applicants = initialApplicants.map(app => ({
    ...app,
    status: applicantStates[app.id]?.status || app.status
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case "Shortlist": return "bg-[#063D2E] text-white";
      case "Rejected": return "bg-[#B70000] text-white";
      case "Schedule": return "bg-[#002065] text-white";
      default: return "bg-gray-200 text-gray-700";
    }
  };

  const handleStatusChange = (applicantId, newStatus) => {
    setApplicantStates(prev => ({
      ...prev,
      [applicantId]: { status: newStatus }
    }));
    setOpenDropdownId(null);
  };

  const handleViewApplicantDetails = (applicant) => {
    console.log("View details for:", applicant);
  };

  // Key fix: use position:fixed so overflow-x-auto cannot clip the dropdown.
  // getBoundingClientRect() gives viewport-relative coordinates — perfect for fixed positioning.
  const handleDropdownToggle = (e, applicantId) => {
    e.stopPropagation();

    if (openDropdownId === applicantId) {
      setOpenDropdownId(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const dropdownHeight = 160;
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropUp = spaceBelow < dropdownHeight;

    setDropdownPos({
      top: dropUp ? rect.top - dropdownHeight : rect.bottom + 4,
      right: window.innerWidth - rect.right,
    });

    setOpenDropdownId(applicantId);
  };

  const job = getJobById(id);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#EBE5D9] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0B0B0B] mb-4">Job not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#063D2E] text-white rounded hover:bg-[#052d24] cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#063D2E] hover:text-[#052d24] mb-6 font-medium cursor-pointer"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="bg-[#EBE5D9] rounded-lg p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#063D2E] rounded-lg flex items-center justify-center overflow-hidden">
                  <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#0B0B0B] mb-3">{job.title}</h1>
                  <div className="flex flex-wrap items-center gap-3 text-[#484849] mb-4">
                    <span className="font-medium">{job.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>Published {job.postedDaysAgo}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <div className="text-xs text-[#484849] mb-1">Salary</div>
                      <div className="text-sm font-semibold text-[#0B0B0B]">{job.salary}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#484849] mb-1">Job Type</div>
                      <div className="text-sm font-semibold text-[#0B0B0B]">{job.type}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#484849] mb-1">Experience</div>
                      <div className="text-sm font-semibold text-[#0B0B0B]">{job.experience}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#484849] mb-1">Category</div>
                      <div className="text-sm font-semibold text-[#0B0B0B]">{job.category}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Role */}
            <div className="bg-[#EBE5D9] rounded-lg p-6 sm:p-8 space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B0B0B] mb-4">About the Role</h2>
                <p className="text-[#484849] leading-relaxed">{job.about}</p>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B0B0B] mb-4">Key Responsibilities</h2>
                <div className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 size={20} className="text-[#0B8B8B] shrink-0 mt-0.5" />
                      <p className="text-[#484849]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B0B0B] mb-4">Requirements</h2>
                <ul className="space-y-3 list-disc list-inside">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="text-[#484849]">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B0B0B] mb-4">Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {job.benefits.map((benefit, index) => {
                    const IconComponent = getIcon(benefit.icon);
                    return (
                      <div key={index} className="bg-[#D9CFBA] rounded-lg p-4 flex items-center gap-3 hover:shadow-md transition-shadow">
                        <p className="text-[#0B0B0B] font-medium">{benefit.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 sticky top-30 self-start">
            <div className="bg-[#EBE5D9] rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">Ready to Apply?</h3>
              <p className="text-[#484849] mb-6 text-sm">By applying, you agree to our Terms and Privacy Policy.</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-6 py-3 bg-[#D3C085] text-[#0B0B0B] font-semibold rounded hover:bg-[#c4b176] transition-colors mb-3 cursor-pointer"
              >
                Apply Now
              </button>
              <button className="w-full px-6 py-3 bg-[#063D2E] text-white font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer">
                Save Job
              </button>
            </div>
            <div className="bg-[#EBE5D9] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#0B0B0B] mb-4">About {job.company}</h3>
              <div className="flex flex-col gap-3 text-sm text-[#484849]">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={18} />
                  <span>{job.company}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={job.title}
        company={job.company}
        logo={job.logo}
      />

      {/* Applicant List Section - Only visible if coming from Dashboard and jobs-listing page */}
      {isFromDashboard && (
        <div className="mt-12 mb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0B0B] mb-6">Applicant list</h2>

            <div className="overflow-x-auto rounded-lg shadow">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#D3C085]">
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">Name</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">Location</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">Phone Number</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">Applied Date</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">Status</th>
                    <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">Email</th>
                    <th className="px-4 sm:px-6 py-3 text-center text-sm font-semibold text-[#0B0B0B]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((applicant) => (
                    <tr key={applicant.id} className="bg-[#E6E1D6] border-b border-[#D3C085]">
                      <td className="px-4 sm:px-6 py-4 text-sm text-[#0B0B0B] font-medium">{applicant.name}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">{applicant.location}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">{applicant.phone}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">{applicant.appliedDate}</td>
                      <td className="px-4 sm:px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(applicant.status)}`}>
                          {applicant.status}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">{applicant.email}</td>
                      <td className="px-4 sm:px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                          {/* Eye Icon */}
                          <button
                            onClick={() => handleViewApplicantDetails(applicant)}
                            className="p-2 text-[#484849] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                            title="View details"
                          >
                            <Eye size={18} />
                          </button>

                          {/* Dropdown toggle — no wrapper div needed anymore */}
                          <button
                            onClick={(e) => handleDropdownToggle(e, applicant.id)}
                            className="p-2 text-[#484849] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                            title="Change status"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${openDropdownId === applicant.id ? "rotate-180" : ""}`}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/*
        Dropdown rendered here — completely OUTSIDE the table and overflow-x-auto container.
        Uses position:fixed with coordinates from getBoundingClientRect() so it can never
        be clipped, and automatically opens upward when near the bottom of the viewport.
        Only visible if coming from Dashboard and jobs-listing page
      */}
      {isFromDashboard && openDropdownId !== null && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            right: dropdownPos.right,
            zIndex: 9999,
          }}
          className="w-44 bg-white border border-[#D3C085] rounded-lg shadow-xl"
        >
          {["Shortlist", "Rejected", "Schedule"].map((status, index) => (
            <button
              key={status}
              onClick={() => handleStatusChange(openDropdownId, status)}
              className={`w-full px-4 py-3 text-sm font-semibold text-[#0B0B0B] hover:bg-[#F5F2E8] transition-colors
                ${index !== 2 ? "border-b border-[#E6E1D6]" : ""}
                ${index === 0 ? "rounded-t-lg" : ""}
                ${index === 2 ? "rounded-b-lg" : ""}
                ${applicants.find((a) => a.id === openDropdownId)?.status === status ? "bg-[#EBE5D9]" : ""}
              `}
            >
              {status}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobDetails;