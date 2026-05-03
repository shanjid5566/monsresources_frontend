import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Download,
  Briefcase,
  Calendar,
  Building2,
  ExternalLink,
} from "lucide-react";

const ApplicantDetails = () => {
  const navigate = useNavigate();
  const { applicantId } = useParams();

  // Sample applicant data - in real app, this would come from API or props
  const applicant = {
    id: applicantId || 1,
    name: "Sarah Anderson",
    title: "Senior UX Designer",
    email: "sarah.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    appliedDate: "12 August 2024 10:30 PM",
    status: "Shortlist",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Product Designer with 5+ years of experience designing user experiences for startups and enterprises, specializing in mobile and web design.",
    experience: "5+ years",
    experienceLevel: "Senior",
    linkedinUrl: "https://linkedin.com/in/sarah-anderson",
    githubUrl: "https://github.com/sarahunderson",
    skills: [
      "Figma",
      "UX Research",
      "Prototyping",
      "User Testing",
      "Wireframing",
      "Design Systems",
      "HTML/CSS",
      "Interaction Design",
      "Information Architecture",
      "React",
    ],
    workExperience: [
      {
        id: 1,
        title: "Senior UX Designer",
        company: "TechFlow Inc.",
        duration: "2021 - Present",
        description:
          "Led design of customer-facing mobile platform, improving user engagement by 45%. Managed 3 junior designers.",
      },
      {
        id: 2,
        title: "UI Designer",
        company: "Creative Studio",
        duration: "2019 - 2021",
        description:
          "Designed user interfaces for web and mobile applications. Collaborated with product and dev teams.",
      },
      {
        id: 3,
        title: "Junior Product Designer",
        company: "StartupXYZ",
        duration: "2018 - 2019",
        description:
          "Created wireframes and prototypes for product features. Conducted user research and testing.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Master of Human-Computer Interaction",
        school: "Carnegie Mellon University",
        year: "2018",
      },
      {
        id: 2,
        degree: "Bachelor of Fine Arts in Design",
        school: "Rhode Island School of Design",
        year: "2016",
      },
    ],
    coverLetter: `I am excited to apply for the Senior UX Designer position at your company. With 5+ years of experience designing user-centered digital experiences, I am confident that my skills and expertise align perfectly with your team's needs.

Throughout my career, I have successfully led cross-functional teams to deliver engaging products that users love. My experience spans mobile and web applications, and I have a proven track record of improving user engagement and satisfaction metrics.

I am particularly interested in your company's mission to revolutionize user experience through innovative design. I believe my background in design systems and user research would be valuable in contributing to your team's success.

I would welcome the opportunity to discuss how my experience and passion for great design can benefit your organization.`,
    resumeUrl: "Resume_SarahAnderson.pdf",
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#063D2E] hover:text-[#052d24] mb-4 font-medium cursor-pointer text-base"
        >
          <ArrowLeft size={18} />
          <span>Back to Applications</span>
        </button>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6">
          <div className="flex gap-4">
            {/* Profile Image */}
            <img
              src={applicant.profileImage}
              alt={applicant.name}
              className="w-20 h-20 rounded-full border-3 border-[#063D2E] object-cover"
            />
            {/* Header Info */}
            <div>
              <h1 className="text-2xl font-bold text-[#0B0B0B] mb-1">
                {applicant.name}
              </h1>
              <p className="text-base text-[#484849] mb-2">{applicant.title}</p>
              <div className="space-y-1 text-sm text-[#484849]">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{applicant.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>Applied {applicant.appliedDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons in Header */}
          <div className="flex gap-2">
            <button className="px-3 py-2 bg-[#063D2E] text-white text-sm font-semibold rounded hover:bg-[#052d24] transition-colors cursor-pointer">
              Shortlist
            </button>
            <button className="px-3 py-2 bg-[#002065] text-white text-sm font-semibold rounded hover:bg-[#001850] transition-colors cursor-pointer">
              Scheduled Interview
            </button>
            <button className="px-3 py-2 bg-[#B70000] text-white text-sm font-semibold rounded hover:bg-[#9a0000] transition-colors cursor-pointer">
              Reject
            </button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Profile Overview */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#0B0B0B] mb-3">
                Profile Overview
              </h2>
              <p className="text-base text-[#484849] leading-relaxed mb-4">
                {applicant.bio}
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#D9CFBA] rounded-lg p-3 text-center">
                  <p className="text-sm text-[#484849] mb-1">5+ years</p>
                  <p className="text-base font-bold text-[#0B0B0B]">Experience</p>
                </div>
                <div className="bg-[#D9CFBA] rounded-lg p-3 text-center">
                  <p className="text-sm text-[#484849] mb-1">Senior</p>
                  <p className="text-base font-bold text-[#0B0B0B]">Level</p>
                </div>
                <div className="bg-[#D9CFBA] rounded-lg p-3 text-center">
                  <p className="text-sm text-[#484849] mb-1">Available in 2 weeks</p>
                  <p className="text-base font-bold text-[#0B0B0B]">Availability</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#0B0B0B] mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {applicant.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#D3C085] text-[#0B0B0B] text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#0B0B0B] mb-4">
                Work Experience
              </h2>
              <div className="space-y-4">
                {applicant.workExperience.map((job, index) => (
                  <div
                    key={job.id}
                    className={`pb-4 ${
                      index !== applicant.workExperience.length - 1
                        ? "border-b border-[#D3C085]"
                        : ""
                    }`}
                  >
                    <div className="flex gap-3 mb-2">
                      <Briefcase
                        size={16}
                        className="text-[#063D2E] shrink-0 mt-0.5"
                      />
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-[#0B0B0B]">
                          {job.title}
                        </h3>
                        <p className="text-sm text-[#484849]">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#484849] ml-6 mb-2">
                      <Calendar size={12} />
                      <span>{job.duration}</span>
                    </div>
                    <p className="text-sm text-[#484849] leading-relaxed ml-6">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#0B0B0B] mb-4">
                Education
              </h2>
              <div className="space-y-3">
                {applicant.education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className={`pb-3 ${
                      index !== applicant.education.length - 1
                        ? "border-b border-[#D3C085]"
                        : ""
                    }`}
                  >
                    <div className="flex gap-3">
                      <Building2
                        size={16}
                        className="text-[#063D2E] shrink-0 mt-0.5"
                      />
                      <div>
                        <h3 className="text-base font-bold text-[#0B0B0B]">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-[#484849]">{edu.school}</p>
                        <p className="text-sm text-[#484849] mt-1">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover Letter */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#0B0B0B] mb-3">
                Cover Letter
              </h2>
              <div className="bg-[#F6F2E8] rounded-lg p-4 border border-[#D3C085]">
                <p className="text-sm text-[#484849] leading-relaxed whitespace-pre-wrap">
                  {applicant.coverLetter}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column (1/3) */}
          <div className="lg:col-span-1 space-y-4">
            {/* Contact Information */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#0B0B0B] mb-3">
                Contact Information
              </h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${applicant.email}`}
                  className="flex items-center gap-2 text-sm text-[#0B0B0B] hover:text-[#063D2E] transition-colors cursor-pointer"
                >
                  <Mail size={14} className="text-[#063D2E] shrink-0" />
                  <span className="break-all">{applicant.email}</span>
                </a>
                <a
                  href={`tel:${applicant.phone}`}
                  className="flex items-center gap-2 text-sm text-[#0B0B0B] hover:text-[#063D2E] transition-colors cursor-pointer"
                >
                  <Phone size={14} className="text-[#063D2E] shrink-0" />
                  <span>{applicant.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-[#0B0B0B]">
                  <MapPin size={14} className="text-[#063D2E] shrink-0" />
                  <span>{applicant.location}</span>
                </div>
                <a
                  href={applicant.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#063D2E] hover:underline cursor-pointer mt-2"
                >
                  <ExternalLink size={12} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={applicant.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#063D2E] hover:underline cursor-pointer"
                >
                  <ExternalLink size={12} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Resume */}
            <div className="bg-[#EBE5D9] rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-[#0B0B0B]">Resume</h3>
                <button className="text-[#063D2E] hover:text-[#052d24] transition-colors cursor-pointer">
                  <Download size={16} />
                </button>
              </div>
              <div className="bg-[#D9CFBA] rounded-lg p-4 mb-3 text-center border-2 border-[#B70000]">
                <div className="w-12 h-12 bg-[#B70000] rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PDF</span>
                </div>
                <p className="text-sm font-semibold text-[#0B0B0B] truncate">
                  {applicant.resumeUrl}
                </p>
                <p className="text-sm text-[#484849] mt-1">827 KB</p>
              </div>
              <button className="w-full px-3 py-2 bg-[#D3C085] text-[#0B0B0B] text-sm font-semibold rounded-lg hover:bg-[#c4b176] transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
