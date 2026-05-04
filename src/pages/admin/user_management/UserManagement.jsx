// import React, { useState, useMemo, useEffect, useRef } from "react";
// import { Search, MoreVertical } from "lucide-react";
// import Pagination from "../../../components/common/pagination/Pagination";

// const UserManagement = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterRole, setFilterRole] = useState("all");
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [statusMenuOpen, setStatusMenuOpen] = useState(null);
//   const dropdownRef = useRef(null);
//   const itemsPerPage = 6;

//   // Mock user data
//   const allUsers = [
//     {
//       id: 1,
//       name: "Devon Lane",
//       email: "kend.lawson@example.com",
//       phone: "(217) 555-0113",
//       joinedDate: "4-2-2022",
//       status: "Active",
//       role: "Job Seeker",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 2,
//       name: "Devon Lane",
//       email: "ten.jennings@example.com",
//       phone: "(229) 555-0109",
//       joinedDate: "13-4-2022",
//       status: "Suspended",
//       role: "Employer",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 3,
//       name: "Devon Lane",
//       email: "georgia.young@example.com",
//       phone: "(307) 555-0133",
//       joinedDate: "14-7-2022",
//       status: "Active",
//       role: "Job Seeker",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 4,
//       name: "Devon Lane",
//       email: "willie.jennings@example.com",
//       phone: "(629) 555-0129",
//       joinedDate: "8-9-2022",
//       status: "Active",
//       role: "Employer",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 5,
//       name: "Devon Lane",
//       email: "willie.jennings@example.com",
//       phone: "(629) 555-0129",
//       joinedDate: "8-9-2022",
//       status: "Active",
//       role: "Job Seeker",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 6,
//       name: "Devon Lane",
//       email: "willie.jennings@example.com",
//       phone: "(629) 555-0129",
//       joinedDate: "8-9-2022",
//       status: "Active",
//       role: "Employer",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 7,
//       name: "Devon Lane",
//       email: "willie.jennings@example.com",
//       phone: "(629) 555-0129",
//       joinedDate: "8-9-2022",
//       status: "Active",
//       role: "Job Seeker",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 8,
//       name: "Devon Lane",
//       email: "willie.jennings@example.com",
//       phone: "(629) 555-0129",
//       joinedDate: "8-9-2022",
//       status: "Active",
//       role: "Employer",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//     {
//       id: 9,
//       name: "Devon Lane",
//       email: "willie.jennings@example.com",
//       phone: "(629) 555-0129",
//       joinedDate: "8-9-2022",
//       status: "Active",
//       role: "Job Seeker",
//       location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
//       companySize: 100,
//     },
//   ];

//   // Filter users based on search and role filter
//   const filteredUsers = useMemo(() => {
//     return allUsers.filter((user) => {
//       const matchesSearch =
//         user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase());

//       const matchesRole = filterRole === "all" || user.role === filterRole;
      
//       const matchesStatus = filterStatus === "all" || user.status === filterStatus;

//       return matchesSearch && matchesRole && matchesStatus;
//     });
//   }, [searchTerm, filterRole, filterStatus]);

//   // Pagination
//   const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedUsers = filteredUsers.slice(
//     startIndex,
//     startIndex + itemsPerPage,
//   );

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active":
//         return "bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]";
//       case "Suspended":
//         return "bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2]";
//       default:
//         return "bg-[#F5F5F5] text-[#616161]";
//     }
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setStatusMenuOpen(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleStatusChange = (userId, newStatus) => {
//     // Here you would typically update the user status in your backend
//     console.log(`Changing user ${userId} status to ${newStatus}`);
//     setStatusMenuOpen(null);
//     // TODO: Implement actual status update logic
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-[#1A1B1C] mb-2">
//           User Management
//         </h1>
//         <p className="text-[#222424] text-sm">
//           Manage all platform users, roles and their account status.
//         </p>
//       </div>

//       {/* Search and Filter Bar */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         {/* Search Input */}
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-3 text-[#D3C085]" size={20} />
//           <input
//             type="text"
//             placeholder="Search by name or email..."
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="w-full pl-10 pr-4 py-2.5 border border-[#E8E3D6] rounded-lg bg-[#FDF9EE] text-[#1A1B1C] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#063D2E] focus:border-transparent"
//           />
//         </div>

//         {/* Status Filter Dropdown */}
//         <div>
//           <select
//             value={filterStatus}
//             onChange={(e) => {
//               setFilterStatus(e.target.value);
//               setCurrentPage(1);
//             }}
//             className="px-4 py-2.5 border border-[#D3C085] bg-white text-[#1A1B1C] font-medium rounded-lg cursor-pointer hover:bg-[#f9f9f9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#063D2E]"
//           >
//             <option value="all">All Status</option>
//             <option value="Active">Active</option>
//             <option value="Suspended">Suspended</option>
//           </select>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border border-[#D3C085]/20">
//           <thead>
//             <tr className="bg-[#D3C085] border-b-2 border-[#D3C085]">
//               <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
//                 Phone Number
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
//                 Joined Date
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedUsers.length > 0 ? (
//               paginatedUsers.map((user, index) => (
//                 <tr
//                   key={user.id}
//                   className={`hover:bg-[#f0eadb] transition-colors bg-[#FDF9EE]`}
//                 >
//                   {/* Name with Location */}
//                   <td className="px-6 py-4">
//                     <div>
//                       <p className="font-semibold text-[#1A1B1C]">
//                         {user.name}
//                       </p>
//                       <p className="text-xs text-[#999] mt-1">
//                         Headcount Size: {user.companySize} <br />
//                         {user.location}
//                       </p>
//                     </div>
//                   </td>

//                   {/* Phone */}
//                   <td className="px-6 py-4">
//                     <p className="text-[#1A1B1C]">{user.phone}</p>
//                   </td>

//                   {/* Email */}
//                   <td className="px-6 py-4">
//                     <p className="text-[#1A1B1C] break-all">{user.email}</p>
//                   </td>

//                   {/* Joined Date */}
//                   <td className="px-6 py-4">
//                     <p className="text-[#1A1B1C]">{user.joinedDate}</p>
//                   </td>

//                   {/* Status Badge */}
//                   <td className="px-6 py-4">
//                     <span
//                       className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
//                         user.status,
//                       )}`}
//                     >
//                       {user.status}
//                     </span>
//                   </td>

//                   {/* Actions */}
//                   <td className="px-6 py-4">
//                     <div
//                       className="relative"
//                       ref={statusMenuOpen === user.id ? dropdownRef : null}
//                     >
//                       <button
//                         onClick={() =>
//                           setStatusMenuOpen(
//                             statusMenuOpen === user.id ? null : user.id,
//                           )
//                         }
//                         className="p-2 hover:bg-[#f0eadb] rounded-lg transition-colors  cursor-pointer"
//                       >
//                         <MoreVertical size={18} className="text-[#222424]" />
//                       </button>

//                       {/* Status Dropdown Menu */}
//                       {statusMenuOpen === user.id && (
//                         <div className="absolute right-0 top-10 bg-white border border-[#E8E3D6] rounded-lg shadow-lg z-10 min-w-[150px]">
//                           <button
//                             onClick={() =>
//                               handleStatusChange(user.id, "Active")
//                             }
//                             className="w-full px-4 py-2 text-left text-sm text-[#1A1B1C] hover:bg-[#FDF9EE] transition-colors cursor-pointer"
//                           >
//                             Active
//                           </button>
//                           <button
//                             onClick={() =>
//                               handleStatusChange(user.id, "Suspended")
//                             }
//                             className="w-full px-4 py-2 text-left text-sm text-[#1A1B1C] hover:bg-[#FDF9EE] transition-colors"
//                           >
//                             Suspended
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="px-6 py-8 text-center text-[#999]">
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="-mt-8">
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//             siblingCount={totalPages}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagement;









import React, { useState, useMemo, useEffect } from "react";
import { Search, MoreVertical } from "lucide-react";
import Pagination from "../../../components/common/pagination/Pagination";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusMenuOpen, setStatusMenuOpen] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 }); // Track exact coordinate position
  const itemsPerPage = 6;

  // Mock user data
  const allUsers = [
    {
      id: 1,
      name: "Devon Lane",
      email: "kend.lawson@example.com",
      phone: "(217) 555-0113",
      joinedDate: "4-2-2022",
      status: "Active",
      role: "Job Seeker",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 2,
      name: "Devon Lane",
      email: "ten.jennings@example.com",
      phone: "(229) 555-0109",
      joinedDate: "13-4-2022",
      status: "Suspended",
      role: "Employer",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 3,
      name: "Devon Lane",
      email: "georgia.young@example.com",
      phone: "(307) 555-0133",
      joinedDate: "14-7-2022",
      status: "Active",
      role: "Job Seeker",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 4,
      name: "Devon Lane",
      email: "willie.jennings@example.com",
      phone: "(629) 555-0129",
      joinedDate: "8-9-2022",
      status: "Active",
      role: "Employer",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 5,
      name: "Devon Lane",
      email: "willie.jennings@example.com",
      phone: "(629) 555-0129",
      joinedDate: "8-9-2022",
      status: "Active",
      role: "Job Seeker",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 6,
      name: "Devon Lane",
      email: "willie.jennings@example.com",
      phone: "(629) 555-0129",
      joinedDate: "8-9-2022",
      status: "Active",
      role: "Employer",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 7,
      name: "Devon Lane",
      email: "willie.jennings@example.com",
      phone: "(629) 555-0129",
      joinedDate: "8-9-2022",
      status: "Active",
      role: "Job Seeker",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 8,
      name: "Devon Lane",
      email: "willie.jennings@example.com",
      phone: "(629) 555-0129",
      joinedDate: "8-9-2022",
      status: "Active",
      role: "Employer",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
    {
      id: 9,
      name: "Devon Lane",
      email: "willie.jennings@example.com",
      phone: "(629) 555-0129",
      joinedDate: "8-9-2022",
      status: "Active",
      role: "Job Seeker",
      location: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      companySize: 100,
    },
  ];

  // Filter users based on search and role filter
  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRole = filterRole === "all" || user.role === filterRole;
      
      const matchesStatus = filterStatus === "all" || user.status === filterStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [searchTerm, filterRole, filterStatus]);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9]";
      case "Suspended":
        return "bg-[#FFEBEE] text-[#C62828] border border-[#FFCDD2]";
      default:
        return "bg-[#F5F5F5] text-[#616161]";
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setStatusMenuOpen(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setStatusMenuOpen(null);
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  const handleDropdownToggle = (e, userId) => {
    e.stopPropagation();

    if (statusMenuOpen === userId) {
      setStatusMenuOpen(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const dropdownHeight = 85; // Roughly the height of the dropdown
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropUp = spaceBelow < dropdownHeight;

    setDropdownPos({
      top: dropUp ? rect.top - dropdownHeight : rect.bottom + 4,
      right: window.innerWidth - rect.right,
    });

    setStatusMenuOpen(userId);
  };

  const handleStatusChange = (userId, newStatus) => {
    // Here you would typically update the user status in your backend
    console.log(`Changing user ${userId} status to ${newStatus}`);
    setStatusMenuOpen(null);
    // TODO: Implement actual status update logic
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setStatusMenuOpen(null); // Close dropdown when page changes
  };

  return (
    <div className="">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] mb-2">
          User Management
        </h1>
        <p className="text-gray-600">
          Manage all platform users, roles and their account status.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-[#D3C085]" size={20} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-[#E8E3D6] rounded-lg bg-[#FDF9EE] text-[#1A1B1C] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#063D2E] focus:border-transparent"
          />
        </div>

        {/* Status Filter Dropdown */}
        <div>
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2.5 border border-[#D3C085] bg-white text-[#1A1B1C] font-medium rounded-lg cursor-pointer hover:bg-[#f9f9f9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#063D2E]"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-[#D3C085]/20">
          <thead>
            <tr className="bg-[#D3C085] border-b-2 border-[#D3C085]">
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
                Joined Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#1A1B1C]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`hover:bg-[#f0eadb] transition-colors bg-[#FDF9EE]`}
                >
                  {/* Name with Location */}
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-[#1A1B1C]">
                        {user.name}
                      </p>
                      <p className="text-xs text-[#999] mt-1">
                        Headcount Size: {user.companySize} <br />
                        {user.location}
                      </p>
                    </div>
                  </td>

                  {/* Phone */}
                  <td className="px-6 py-4">
                    <p className="text-[#1A1B1C]">{user.phone}</p>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4">
                    <p className="text-[#1A1B1C] break-all">{user.email}</p>
                  </td>

                  {/* Joined Date */}
                  <td className="px-6 py-4">
                    <p className="text-[#1A1B1C]">{user.joinedDate}</p>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        user.status,
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <button
                      onClick={(e) => handleDropdownToggle(e, user.id)}
                      className="p-2 hover:bg-[#f0eadb] rounded-lg transition-colors cursor-pointer"
                    >
                      <MoreVertical size={18} className="text-[#222424]" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-[#999]">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="-mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            siblingCount={totalPages}
          />
        </div>
      )}

      {/* Global Fixed Dropdown Menu */}
      {statusMenuOpen !== null && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            right: dropdownPos.right,
            zIndex: 9999,
          }}
          className="w-36 bg-white border border-[#E8E3D6] rounded-lg shadow-lg overflow-hidden"
        >
          <button
            onClick={() => handleStatusChange(statusMenuOpen, "Active")}
            className="w-full px-4 py-2.5 text-left text-sm font-medium text-[#1A1B1C] hover:bg-[#FDF9EE] transition-colors border-b border-[#E8E3D6]"
          >
            Active
          </button>
          <button
            onClick={() => handleStatusChange(statusMenuOpen, "Suspended")}
            className="w-full px-4 py-2.5 text-left text-sm font-medium text-[#1A1B1C] hover:bg-[#FDF9EE] transition-colors"
          >
            Suspended
          </button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;