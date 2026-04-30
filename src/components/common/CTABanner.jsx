import React from 'react'

/**
 * CTABanner
 * Props:
 * - title: main heading
 * - subtitle: supporting text
 * - buttonText: CTA button label
 * - onButtonClick: callback for button click
 * - bgImage: path to background image (default: /home/cta_placeholder.png)
 *
 * Usage:
 * <CTABanner title="Are You Hiring?" subtitle="Post your job..." buttonText="Post a Job" />
 */
const CTABanner = ({
  title = 'Are You Hiring?',
  subtitle = 'Post your job and reach top candidates in the technology hub of the Pacific Northwest. Connect with builders, dreamers, and innovators.',
  buttonText = 'Post a Job',
  onButtonClick = () => {},
  bgImage = '/home/cta_banner.png',
}) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label="Call to action banner"
    >

      <div className="relative max-w-2xl mx-auto px-6 py-20 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h2>
        <p className="mt-3 text-base max-w-3xl mx-auto text-white/90">
          {subtitle}
        </p>

        <div className="mt-6">
          <button
            type="button"
            onClick={onButtonClick}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#D3C085] text-[#0B0B0B] font-semibold rounded hover:brightness-95 transition cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
