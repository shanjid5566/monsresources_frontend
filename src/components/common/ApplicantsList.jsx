import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ChevronDown } from "lucide-react";
import Pagination from "./Pagination";

const ApplicantsList = ({ applicants: initialApplicants = [], heading = "Applicant list", itemsPerPage = 10, useContainer = true }) => {
  const navigate = useNavigate();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [applicantStates, setApplicantStates] = useState({});
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  const applicants = initialApplicants.map((app) => ({
    ...app,
    status: applicantStates[app.id]?.status || app.status,
  }));

  // Pagination logic
  const totalPages = Math.ceil(applicants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedApplicants = applicants.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setOpenDropdownId(null);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdownId(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setOpenDropdownId(null);
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Shortlist":
        return "bg-[#063D2E] text-white";
      case "Rejected":
        return "bg-[#B70000] text-white";
      case "Schedule":
        return "bg-[#002065] text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const handleStatusChange = (applicantId, newStatus) => {
    setApplicantStates((prev) => ({
      ...prev,
      [applicantId]: { status: newStatus },
    }));
    setOpenDropdownId(null);
  };

  const handleViewApplicantDetails = (applicant) => {
    navigate(`/applicant/${applicant.id}`);
  };

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

  return (
    <div className="mt-12 mb-12">
      {useContainer ? (
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0B0B] mb-6">
            {heading}
          </h2>

          <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-[#D3C085]">
                <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                  Name
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                  Location
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                  Phone Number
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                  Applied Date
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                  Status
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                  Email
                </th>
                <th className="px-4 sm:px-6 py-3 text-center text-sm font-semibold text-[#0B0B0B]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedApplicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className="bg-[#E6E1D6] border-b border-[#D3C085]"
                >
                  <td className="px-4 sm:px-6 py-4 text-sm text-[#0B0B0B] font-medium">
                    {applicant.name}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                    {applicant.location}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                    {applicant.phone}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                    {applicant.appliedDate}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        applicant.status
                      )}`}
                    >
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                    {applicant.email}
                  </td>
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

                      {/* Dropdown toggle */}
                      <button
                        onClick={(e) => handleDropdownToggle(e, applicant.id)}
                        className="p-2 text-[#484849] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                        title="Change status"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            openDropdownId === applicant.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
      ) : (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0B0B] mb-6">
            {heading}
          </h2>

          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full">
              <thead>
                <tr className="bg-[#D3C085]">
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                    Name
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                    Location
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                    Phone Number
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                    Applied Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                    Status
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-sm font-semibold text-[#0B0B0B]">
                    Email
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-center text-sm font-semibold text-[#0B0B0B]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedApplicants.map((applicant) => (
                  <tr
                    key={applicant.id}
                    className="bg-[#E6E1D6] border-b border-[#D3C085]"
                  >
                    <td className="px-4 sm:px-6 py-4 text-sm text-[#0B0B0B] font-medium">
                      {applicant.name}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                      {applicant.location}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                      {applicant.phone}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                      {applicant.appliedDate}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          applicant.status
                        )}`}
                      >
                        {applicant.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm text-[#484849]">
                      {applicant.email}
                    </td>
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

                        {/* Dropdown toggle */}
                        <button
                          onClick={(e) => handleDropdownToggle(e, applicant.id)}
                          className="p-2 text-[#484849] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                          title="Change status"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              openDropdownId === applicant.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {/* Dropdown Menu */}
      {openDropdownId !== null && (
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
                ${
                  applicants.find((a) => a.id === openDropdownId)?.status ===
                  status
                    ? "bg-[#EBE5D9]"
                    : ""
                }
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

export default ApplicantsList;
