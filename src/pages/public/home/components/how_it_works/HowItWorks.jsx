import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create an account!",
      description:
        "Take a moment to create your profile in just 30 seconds, share what you're looking for, and then you can begin swiping at your own pace",
      image: "/home/how_it_works_1.png",
    },
    {
      id: 2,
      title: "Upload Job Post",
      description:
        "Sharing job opportunity with us is essential for connecting with exceptional candidates, highlight the unique aspects of your role, the skills you seek",
      image: "/home/how_it_works_2.png",
    },
    {
      id: 3,
      title: "Get Employees",
      description:
        "Congratulations, we have successfully found your dream employee, they meet the criteria and are definitely professional",
      image: "/home/how_it_works_3.png",
    },
  ];

  return (
    <section className="w-full bg-[#F2EFE9] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-[#111111] rounded-full px-4 py-2 text-xs font-semibold text-[#111111] mb-4">
            How it works
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] leading-tight max-w-2xl">
            Decreasing the time it takes for PNW companies to find, vet and hire
            thew key people
          </h2>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-112 object-contain rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold text-[#111111] mb-3">
                {step.title}
              </h3>
              <p className="text-[#0B0B0B] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet: Image on top, text below */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Image */}
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-74 object-cover rounded-lg mb-4"
              />
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#111111] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#0B0B0B] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
