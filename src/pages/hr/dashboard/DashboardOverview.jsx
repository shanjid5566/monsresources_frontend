import React, { useState } from "react";
import { Briefcase, Users, UserCheck } from "lucide-react";
import StatusCard from "./components/StatusCard";
import ApplicationTrends from "./components/ApplicationTrends";
import ApplicantsList from "../../../components/common/ApplicantsList";

const DashboardOverview = () => {
  const [selectedYear, setSelectedYear] = useState("thisYear");

  // Mock data for This Year
  const dataThisYear = [
    { month: "Jan", applications: 24 },
    { month: "Feb", applications: 32 },
    { month: "Mar", applications: 28 },
    { month: "Apr", applications: 42 },
    { month: "May", applications: 48 },
    { month: "Jun", applications: 65 },
    { month: "Jul", applications: 72 },
    { month: "Aug", applications: 88 },
    { month: "Sep", applications: 58 },
    { month: "Oct", applications: 52 },
    { month: "Nov", applications: 48 },
    { month: "Dec", applications: 5 },
  ];

  // Mock data for Last Year
  const dataLastYear = [
    { month: "Jan", applications: 18 },
    { month: "Feb", applications: 22 },
    { month: "Mar", applications: 20 },
    { month: "Apr", applications: 32 },
    { month: "May", applications: 35 },
    { month: "Jun", applications: 42 },
    { month: "Jul", applications: 48 },
    { month: "Aug", applications: 45 },
    { month: "Sep", applications: 38 },
    { month: "Oct", applications: 32 },
    { month: "Nov", applications: 28 },
    { month: "Dec", applications: 25 },
  ];

  const chartData = selectedYear === "thisYear" ? dataThisYear : dataLastYear;

  // Status cards data
  const statusCards = [
    {
      id: 1,
      title: "Total Jobs Posted",
      value: "48",
      icon: Briefcase,
      color: "#063D2E",
    },
    {
      id: 2,
      title: "Total Applications",
      value: "1,284",
      icon: Users,
      color: "#063D2E",
    },
    {
      id: 3,
      title: "New Applicants (Today)",
      value: "156",
      icon: UserCheck,
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
      status: "Scheduled Interview",
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
      status: "Scheduled Interview",
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
            Good morning, Alex!
          </h1>
          <p className="text-[#222424] text-base">
            Here's what's happening with your job postings.
          </p>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Application Trends Chart */}
      <ApplicationTrends
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
