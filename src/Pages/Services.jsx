
import { Link } from 'react-router-dom'

import {
  Printer,
  Palette,
  PanelsTopLeft,
  FileText,
  Megaphone,
  Package,
  ArrowRight,
} from 'lucide-react'

export const Services = () => {

  // NOTE 1:
  // This array contains all the services displayed on the page.
  //
  // To add a service:
  // Copy one object, paste it below, and change its information.
  //
  // The icon property receives an imported Lucide icon component.

  const services = [
    {
      title: 'General Printing',
      description:
        'Printing solutions for flyers, posters, brochures, and other everyday business materials.',
      icon: Printer,
      number: '01',
    },
    {
      title: 'Graphic Design',
      description:
        'Creative artwork, layouts, and visual designs that communicate your message effectively.',
      icon: Palette,
      number: '02',
    },
    {
      title: 'Branding & Identity',
      description:
        'Visual branding materials that help businesses present a consistent and professional image.',
      icon: PanelsTopLeft,
      number: '03',
    },
    {
      title: 'Large Format Printing',
      description:
        'Large-scale graphics for banners, signage, displays, and promotional applications.',
      icon: Megaphone,
      number: '04',
    },
    {
      title: 'Corporate Printing',
      description:
        'Professional business stationery, including business cards, letterheads, and company documents.',
      icon: FileText,
      number: '05',
    },
    {
      title: 'Promotional Products',
      description:
        'Branded promotional materials and merchandise for businesses, events, and campaigns.',
      icon: Package,
      number: '06',
    },
  ]

  return (

    // NOTE 2:
    // w-full makes the section occupy the full available width.
    <section id="services" className="w-full bg-[#f8f9fc]">

      {/* =====================================
          PART 1: SECTION INTRODUCTION
          ===================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-24">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#e78625] uppercase tracking-widest font-bold text-sm mb-4">
            What We Do
          </p>

          {/* NOTE 3:
              Change this heading to rename the section title. */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14213d] leading-tight mb-5">
            Our Services
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide printing, design, and branding solutions
            to help businesses and individuals bring their ideas
            to life.
          </p>

        </div>
      </div>


      {/* =====================================
          PART 2: SERVICE CARDS
          ===================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 lg:py-20">

        {/* NOTE 4:
            Responsive grid:
            Mobile = 1 column
            Tablet = 2 columns
            Desktop = 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {/* NOTE 5:
              map() creates a card for every service in the array.
              You do not need to manually create six separate cards. */}
          {services.map((service) => {

            // Gets the icon assigned to the current service.
            const Icon = service.icon

            return (

              <div
                key={service.number}
                className="group bg-white rounded-2xl border border-gray-100 p-7 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Card top row */}
                <div className="flex items-center justify-between mb-7">

                  {/* Icon container */}
                  <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-[#e78625] transition-colors duration-300">

                    <Icon
                      size={30}
                      className="text-[#e78625] group-hover:text-white transition-colors duration-300"
                    />

                  </div>

                  {/* Service number */}
                  <span className="text-gray-200 text-3xl font-extrabold">
                    {service.number}
                  </span>

                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold text-[#14213d] mb-4">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-7">
                  {service.description}
                </p>

                {/* Enquiry link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#e78625] font-semibold text-sm hover:gap-4 transition-all duration-300"
                >
                  Make an Enquiry
                  <ArrowRight size={17} />
                </Link>

              </div>

            )
          })}

        </div>
      </div>


      {/* =====================================
          PART 3: CALL TO ACTION
          ===================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pb-20">

        <div className="bg-[#14213d] rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* CTA text */}
          <div className="max-w-2xl text-center lg:text-left">

            <p className="text-orange-300 uppercase tracking-widest font-bold text-sm mb-3">
              Have a Project in Mind?
            </p>

            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              Let's Create Something Great.
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Tell us what you need, and let's discuss how we
              can help bring your ideas to life.
            </p>

          </div>

          {/* CTA button */}
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center justify-center gap-3 bg-[#e78625] hover:bg-[#cf741d] text-white px-7 py-4 rounded-md font-semibold transition-all duration-300"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>

        </div>
      </div>

    </section>
  )
}
