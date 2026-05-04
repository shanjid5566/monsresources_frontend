import React, { useState } from "react";
import { Briefcase, Zap, Users, Eye, FileText } from "lucide-react";
import StatusCard from "./components/StatusCard";
import PlatformActivity from "./components/PlatformActivity";
import ApplicantsList from "../../../components/common/jobs/ApplicantsList";

const DashboardOverview = () => {
  const [selectedYear, setSelectedYear] = useState("thisYear");

  // Mock data for Platform Activity - This Year
  const dataThisYear = [
    { month: "Jan", jobs: 12, applications: 24 },
    { month: "Feb", jobs: 18, applications: 32 },
    { month: "Mar", jobs: 16, applications: 28 },
    { month: "Apr", jobs: 22, applications: 42 },
    { month: "May", jobs: 28, applications: 48 },
    { month: "Jun", jobs: 35, applications: 65 },
    { month: "Jul", jobs: 42, applications: 72 },
    { month: "Aug", jobs: 48, applications: 88 },
    { month: "Sep", jobs: 38, applications: 58 },
    { month: "Oct", jobs: 32, applications: 52 },
    { month: "Nov", jobs: 28, applications: 48 },
    { month: "Dec", jobs: 5, applications: 5 },
  ];

  // Mock data for Platform Activity - Last Year
  const dataLastYear = [
    { month: "Jan", jobs: 8, applications: 18 },
    { month: "Feb", jobs: 12, applications: 22 },
    { month: "Mar", jobs: 10, applications: 20 },
    { month: "Apr", jobs: 16, applications: 32 },
    { month: "May", jobs: 18, applications: 35 },
    { month: "Jun", jobs: 22, applications: 42 },
    { month: "Jul", jobs: 28, applications: 48 },
    { month: "Aug", jobs: 25, applications: 45 },
    { month: "Sep", jobs: 20, applications: 38 },
    { month: "Oct", jobs: 16, applications: 32 },
    { month: "Nov", jobs: 14, applications: 28 },
    { month: "Dec", jobs: 12, applications: 25 },
  ];

  const chartData = selectedYear === "thisYear" ? dataThisYear : dataLastYear;

  // Status cards data for admin overview
  const statusCards = [
    {
      id: 1,
      title: "Total Jobs",
      value: "1,284",
      icon: Briefcase,
      color: "#063D2E",
    },
    {
      id: 2,
      title: "Total Employees",
      value: "456",
      icon: Users,
      color: "#063D2E",
    },
    {
      id: 3,
      title: "Total Job Seekers",
      value: "8,920",
      icon: Eye,
      color: "#063D2E",
    },
    {
      id: 4,
      title: "Total Applications",
      value: "12,450",
      icon: FileText,
      color: "#063D2E",
    },
  ];

  // Recent applications data
  const recentApplications = [
    {
      id: 1,
      name: "Cameron Williamson",
      location: "2464 Royal Ln. Mesa, New Jersey 45463",
      phone: "(252) 555-0126",
      appliedDate: "12-4-2022",
      status: "New",
      email: "michelle.rivera@example.com",
    },
    {
      id: 2,
      name: "Jane Cooper",
      location: "2464 Royal Ln. Mesa, New Jersey 45463",
      phone: "(229) 555-0109",
      appliedDate: "4-2-2022",
      status: "Rejected",
      email: "jessica.hanson@example.com",
    },
    {
      id: 3,
      name: "Robert Fox",
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      phone: "(505) 555-0125",
      appliedDate: "2-1-2022",
      status: "Rejected",
      email: "curtis.weaver@example.com",
    },
    {
      id: 4,
      name: "Kathryn Murphy",
      location: "3517 W. Gray St. Utica, Pennsylvania 57867",
      phone: "(684) 555-0102",
      appliedDate: "13-4-2022",
      status: "Scheduled",
      email: "jackson.graham@example.com",
    },
    {
      id: 5,
      name: "Dianne Russell",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      phone: "(868) 555-0111",
      appliedDate: "17-6-2022",
      status: "Rejected",
      email: "teriya.hill@example.com",
    },
    {
      id: 6,
      name: "Jerome Bell",
      location: "4517 Washington Ave. Manchester, Kentucky 29405",
      phone: "(907) 555-0101",
      appliedDate: "14-7-2022",
      status: "Rejected",
      email: "georgia.young@example.com",
    },
    {
      id: 7,
      name: "Ronald Richards",
      location: "4552 Preston Rd. Inglewood, Maine 98380",
      phone: "(603) 555-0123",
      appliedDate: "6-3-2022",
      status: "Scheduled",
      email: "michael.mtio@example.com",
    },
    {
      id: 8,
      name: "Leslie Alexander",
      location: "3891 Ranchview Dr. Richardson, California 62639",
      phone: "(225) 555-0118",
      appliedDate: "8-9-2022",
      status: "New",
      email: "debra.holt@example.com",
    },
    {
      id: 9,
      name: "Esther Howard",
      location: "4140 Parker Rd. Allentown, New Mexico 31134",
      phone: "(316) 555-0116",
      appliedDate: "9-4-2022",
      status: "Rejected",
      email: "dolores.chambers@example.com",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1B1C] mb-2">
            Overview Dashboard
          </h1>
          <p className="text-[#222424] text-base">
            Welcome back, Platform Admin. Here's what's happening.
          </p>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {statusCards.map((card) => (
          <StatusCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            value={card.value}
            color={card.color}
          />
        ))}
      </div>

      {/* Platform Activity Chart */}
      <PlatformActivity
        data={chartData}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />

      {/* Recent Applications */}
      <ApplicantsList
        applicants={recentApplications}
        heading="Recent Applications"
        itemsPerPage={10}
        useContainer={false}
      />
    </div>
  );
};

export default DashboardOverview;
