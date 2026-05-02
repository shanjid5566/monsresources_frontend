import React, { useState } from 'react';
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Calendar,
  Mail,
  ChevronDown,
  Camera,
  Circle,
  Square,
  Plus,
  AlignLeft,
  List,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AddJobListing() {
  const navigate = useNavigate();

  // State for storing form data
  const [formData, setFormData] = useState({
    jobTitle: 'Senior Frontend Engineer',
    companyName: 'TechFlow Seattle',
    logo: null,
    location: 'Seattle, WA (Remote Optional)',
    salary: '$160k - $210k',
    jobType: 'Full-time',
    experience: 'Senior',
    category: 'Engineering',
    shortDescription: 'We are looking for a Senior Frontend Engineer specialized in React and Motion to build immersive experiences for our cloud platform.',
    aboutRole: 'TechFlow is the leading cloud optimization platform in the Pacific Northwest. We are scaling our core engineering team in Seattle to build the next generation of cloud management tools. As a Senior Frontend Engineer, you will lead the development of our flagship dashboard, focusing on performance, accessibility, and high-fidelity animations.',
    responsibilities: 'Lead the frontend architecture of our core dashboard product\nMentor junior and mid-level engineers through code reviews and workshops\nCollaborate with Product Designers to implement pixel-perfect, accessible UIs\nOptimize application performance for large datasets',
    requirements: '5+ years of professional experience with React and TypeScript\nExtensive knowledge of CSS animation libraries (Motion, GSAP)\nExperience with state management (Redux, Zustand, or XState)\nStrong understanding of web performance optimization techniques',
    benefits: 'Competitive salary and equity package\nFull health, dental, and vision insurance\nFlexible working hours and hybrid options\nAnnual learning and development budget',
    deadline: '2026-06-30',
    email: 'hr@techflow.com'
  });

  // State for customizing application form questions
  const [applicationQuestions, setApplicationQuestions] = useState([
    { id: 1, type: 'Single Choice', questionText: '', options: [''] },
    { id: 2, type: 'Paragraph', questionText: '', options: [] }
  ]);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, logo: imageUrl }));
    }
  };

  // Function to handle input changes for basic details
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper function to convert list item strings to an array
  const parseList = (text) => {
    return text.split('\n').filter(item => item.trim() !== '');
  };

  // --- Application Form Handlers ---
  const addQuestion = () => {
    setApplicationQuestions([...applicationQuestions, { id: Date.now(), type: 'Paragraph', questionText: '', options: [] }]);
  };

  const updateQuestionText = (id, text) => {
    setApplicationQuestions(applicationQuestions.map(q => q.id === id ? { ...q, questionText: text } : q));
  };

  const updateQuestionType = (id, newType) => {
    setApplicationQuestions(applicationQuestions.map(q => {
      if (q.id === id) {
        const needsOptions = newType === 'Single Choice' || newType === 'Multiple Choice';
        return { 
          ...q, 
          type: newType, 
          options: needsOptions && q.options.length === 0 ? [''] : q.options 
        };
      }
      return q;
    }));
  };

  const addOption = (questionId) => {
    setApplicationQuestions(applicationQuestions.map(q => q.id === questionId ? { ...q, options: [...q.options, ''] } : q));
  };

  const updateOption = (questionId, optionIndex, value) => {
    setApplicationQuestions(applicationQuestions.map(q => {
      if (q.id === questionId) {
        const newOptions = [...q.options];
        newOptions[optionIndex] = value;
        return { ...q, options: newOptions };
      }
      return q;
    }));
  };

  const handlePostJob = () => {
    // Handle job posting logic here
    console.log('Job posted:', formData, applicationQuestions);
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors mb-4 cursor-pointer"
            title="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
            <span className="text-slate-600 font-medium">Back</span>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create a New Job Post</h1>
            <p className="text-slate-500 mt-2">Fill out the form below and view the live preview on the right.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Basic Details Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-teal-600" />
                Basic Details
              </h2>
              
              <div className="space-y-4">
                {/* Logo Upload Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">Company Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#f8f9fa] border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden relative group cursor-pointer hover:bg-slate-50 transition-colors">
                      {formData.logo ? (
                        <img src={formData.logo} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <Camera className="w-6 h-6 text-slate-400 group-hover:text-teal-500 transition-colors" />
                      )}
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
                        title="Upload logo"
                      />
                    </div>
                    <div className="text-sm text-slate-500">
                      <p className="font-medium text-slate-700">Upload Company Logo</p>
                      <p className="text-xs">JPG, PNG up to 2MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Job Title</label>
                  <input 
                    type="text" 
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="e.g. Senior Product Designer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      placeholder="e.g. TechFlow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      placeholder="e.g. Seattle, WA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Salary Range</label>
                    <input 
                      type="text" 
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      placeholder="e.g. $120k - $160k"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Job Type</label>
                    <div className="relative">
                      <select 
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      >
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Freelance</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Experience</label>
                    <div className="relative">
                      <select 
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      >
                        <option>Junior</option>
                        <option>Mid-level</option>
                        <option>Senior</option>
                        <option>Lead / Manager</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                    <div className="relative">
                      <select 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      >
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                      </select>
                      <ChevronDown className="w-4 h-4 absolute right-4 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description & More Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-600" />
                Description & More
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
                  <textarea 
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="Brief summary of the role..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">About the Role</label>
                  <textarea 
                    name="aboutRole"
                    value={formData.aboutRole}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="Tell us about the role expectations..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Key Responsibilities (Enter per line)</label>
                  <textarea 
                    name="responsibilities"
                    value={formData.responsibilities}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="List the main responsibilities..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Requirements (Enter per line)</label>
                  <textarea 
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="List the job requirements..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Benefits (Enter per line)</label>
                  <textarea 
                    name="benefits"
                    value={formData.benefits}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"
                    placeholder="List the benefits and perks..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Application Deadline</label>
                    <input 
                      type="date" 
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Contact Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      placeholder="hr@company.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Customize Application Form Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Customize Application Form</h2>
                <p className="text-sm text-slate-500">Create the form applicants will fill out by choosing what information you want to collect from them.</p>
              </div>

              <div className="space-y-4">
                {applicationQuestions.map((q) => (
                  <div key={q.id} className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <input
                        type="text"
                        placeholder="Question"
                        value={q.questionText}
                        onChange={(e) => updateQuestionText(q.id, e.target.value)}
                        className="flex-1 bg-transparent border-b border-slate-300 px-2 py-1.5 focus:border-teal-600 outline-none transition-colors text-slate-800"
                      />
                      <div className="relative w-full sm:w-48 flex-shrink-0">
                        <select
                          value={q.type}
                          onChange={(e) => updateQuestionType(q.id, e.target.value)}
                          className="w-full bg-[#eef0f2] text-slate-700 border-none rounded-lg px-3 py-2.5 appearance-none outline-none text-sm focus:ring-2 focus:ring-teal-500/30"
                        >
                          <option value="Single Choice">Single Choice</option>
                          <option value="Multiple Choice">Multiple Choice</option>
                          <option value="Paragraph">Paragraph</option>
                        </select>
                        <ChevronDown className="w-4 h-4 absolute right-3 top-3 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {(q.type === 'Single Choice' || q.type === 'Multiple Choice') && (
                      <div className="space-y-3 pl-2">
                        {q.options.map((opt, i) => (
                          <div key={i} className="flex items-center gap-3">
                            {q.type === 'Single Choice' ? (
                              <Circle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-300 flex-shrink-0 rounded-[3px]" />
                            )}
                            <input
                              type="text"
                              placeholder={`Option ${i + 1}`}
                              value={opt}
                              onChange={(e) => updateOption(q.id, i, e.target.value)}
                              className="flex-1 bg-transparent border-b border-slate-200 px-2 py-1 focus:border-teal-600 outline-none text-sm transition-colors text-slate-700"
                            />
                          </div>
                        ))}
                        <div className="flex items-center gap-3 mt-2">
                          {q.type === 'Single Choice' ? (
                            <Circle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-300 flex-shrink-0 rounded-[3px]" />
                          )}
                          <button 
                            onClick={() => addOption(q.id)} 
                            className="text-sm text-teal-700 font-medium hover:text-teal-800 focus:outline-none"
                          >
                            Add Option
                          </button>
                        </div>
                      </div>
                    )}

                    {q.type === 'Paragraph' && (
                      <div className="pl-2 mt-2">
                        <div className="w-full border-b border-dotted border-slate-300 px-2 py-1 text-sm text-slate-400">
                          Long answer text
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={addQuestion}
                className="mt-6 flex items-center gap-1.5 text-teal-800 font-semibold text-sm hover:text-teal-900 transition-colors focus:outline-none"
              >
                <Plus className="w-4 h-4" /> Add Questions
              </button>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handlePostJob}
              className="w-full bg-[#063D2E] text-white font-medium py-3.5 rounded-xl shadow-md hover:bg-[#083a2d] transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 mt-2"
            >
              Post Now
            </button>
          </div>

          {/* Right Column: Live Preview Section */}
          <div className="lg:col-span-7">
            <div className="sticky top-8">
              <div className="flex items-center justify-between mb-4 px-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Live Preview</h3>
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
              </div>

              {/* Preview Canvas (Matching the provided design style) */}
              <div className="bg-[#e8e4db] p-4 md:p-8 rounded-3xl shadow-sm space-y-6">
                
                {/* Header Card */}
                <div className="bg-[#f0ece3] rounded-2xl p-6 md:p-8 border border-[#dcd8ce]">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden">
                       {formData.logo ? (
                         <img src={formData.logo} alt="Company Logo preview" className="w-full h-full object-cover" />
                       ) : (
                         <span className="text-white font-bold text-xl tracking-wider">
                           {formData.companyName ? formData.companyName.substring(0,2).toUpperCase() : 'TF'}
                         </span>
                       )}
                    </div>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {formData.jobTitle || 'Job Title Here'}
                      </h1>
                      <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm font-medium mb-3">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" /> {formData.companyName || 'Company Name'}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" /> {formData.location || 'Location'}
                        </span>
                      </div>
                      
                      {formData.shortDescription && (
                        <p className="text-slate-700 text-[15px] leading-relaxed mb-4">
                          {formData.shortDescription}
                        </p>
                      )}

                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Clock className="w-4 h-4" /> Published just now
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#dcd8ce] mb-6"></div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Salary</p>
                      <p className="font-semibold text-slate-900">{formData.salary || 'Not specified'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Job Type</p>
                      <p className="font-semibold text-slate-900">{formData.jobType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Experience</p>
                      <p className="font-semibold text-slate-900">{formData.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Category</p>
                      <p className="font-semibold text-slate-900">{formData.category}</p>
                    </div>
                  </div>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Left Main Content */}
                  <div className="md:col-span-2 space-y-6">
                    {/* About The Role */}
                    <div className="bg-[#f0ece3] rounded-2xl p-6 md:p-8 border border-[#dcd8ce]">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">About the Role</h2>
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {formData.aboutRole || 'Description will appear here...'}
                      </p>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="bg-[#f0ece3] rounded-2xl p-6 md:p-8 border border-[#dcd8ce]">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
                      <ul className="space-y-3">
                        {parseList(formData.responsibilities).map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                        {!formData.responsibilities && <p className="text-slate-500 italic">Responsibilities will be listed here...</p>}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="bg-[#f0ece3] rounded-2xl p-6 md:p-8 border border-[#dcd8ce]">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Requirements</h2>
                      <ul className="space-y-2 list-disc list-outside ml-5">
                        {parseList(formData.requirements).map((item, index) => (
                          <li key={index} className="text-slate-700 leading-relaxed pl-1">
                            {item}
                          </li>
                        ))}
                        {!formData.requirements && <p className="text-slate-500 italic list-none -ml-5">Requirements will be listed here...</p>}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="bg-[#f0ece3] rounded-2xl p-6 md:p-8 border border-[#dcd8ce]">
                      <h2 className="text-xl font-bold text-slate-900 mb-4">Benefits</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {parseList(formData.benefits).map((item, index) => (
                          <div key={index} className="bg-[#e0d9ca] px-4 py-4 rounded-xl border border-[#d2ccbf] flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border border-slate-500 flex items-center justify-center flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-slate-700 rounded-full"></div>
                            </div>
                            <span className="text-slate-800 font-medium text-sm leading-snug">{item}</span>
                          </div>
                        ))}
                        {!formData.benefits && <p className="text-slate-500 italic col-span-2">Benefits will be listed here...</p>}
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="md:col-span-1 space-y-6">
                    {/* About Company Widget */}
                    <div className="bg-[#f0ece3] rounded-2xl p-6 border border-[#dcd8ce]">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">About {formData.companyName || 'Company'}</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-600">
                          <MapPin className="w-5 h-5 text-slate-400" />
                          <span className="text-sm">{formData.location || 'Location'}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <Briefcase className="w-5 h-5 text-slate-400" />
                          <span className="text-sm">{formData.category}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <Calendar className="w-5 h-5 text-slate-400" />
                          <span className="text-sm">Apply by: {formData.deadline || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
