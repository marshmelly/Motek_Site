import { Link } from 'react-router-dom'
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const About = () => {

  // NOTE: These are the company's core values.
  // You can change the title and description of each value here.
  // Keeping this information in an array makes it easier to edit.
  const coreValues = [
    {
      title: 'Quality',
      description:
        'We focus on delivering work that reflects professionalism and attention to detail.',
      icon: Award,
    },
    {
      title: 'Creativity',
      description:
        'We approach every project with fresh ideas and thoughtful design solutions.',
      icon: Lightbulb,
    },
    {
      title: 'Integrity',
      description:
        'We value honesty, transparency, and professionalism in our work.',
      icon: ShieldCheck,
    },
    {
      title: 'Customer Focus',
      description:
        'We listen to our clients and work towards solutions that meet their needs.',
      icon: Users,
    },
  ]

  // NOTE: These are the reasons customers should consider Motek.
  // Edit the descriptions to match the company's actual strengths.
  const reasons = [
    'Professional printing and branding solutions',
    'Attention to detail in every project',
    'Creative approaches to business communication',
    'A commitment to customer satisfaction',
  ]

  return (
    // NOTE: w-full makes the section occupy the full available width.
    // bg-white sets the section background.
    <section id="about" className="w-full bg-white">

      {/* =========================================
          PART 1: COMPANY INTRODUCTION
          ========================================= */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT: Text introduction */}
          <div>

            {/* Small section label */}
            <p className="text-[#e78625] font-bold uppercase tracking-widest text-sm mb-4">
              About Motek Inventions
            </p>

            {/* Main heading
                NOTE: Change this text to adjust the section heading. */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14213d] leading-tight mb-6">
              Turning Ideas Into
              <span className="text-[#e78625]"> Reality.</span>
            </h2>

            {/* Company description
                NOTE: Replace this with the company's approved profile text.
                Avoid adding facts that have not been confirmed. */}
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-5">
              Motek Inventions provides printing, branding, and creative
              solutions designed to help businesses and individuals
              communicate their ideas effectively.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that every project deserves attention, creativity,
              and a commitment to quality. Our goal is to transform ideas
              into professional visual materials that make an impression.
            </p>

            {/* Link to the services page */}
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-[#14213d] hover:bg-[#e78625] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
            >
              Discover Our Services
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* RIGHT: Decorative visual panel
              NOTE: This is currently a designed graphic panel.
              Later, you can replace it with a real company photograph. */}
          <div className="relative">

            {/* Background decorative shapes */}
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-orange-100 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-100 rounded-full"></div>

            {/* Main visual container */}
            <div className="relative bg-[#14213d] rounded-3xl p-8 sm:p-12 min-h-[380px] flex flex-col justify-center overflow-hidden">

              <div className="absolute right-[-30px] bottom-[-50px] opacity-10">
                <Target size={260} color="white" />
              </div>

              <div className="relative z-10">
                <div className="bg-[#e78625] w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Lightbulb size={34} className="text-white" />
                </div>

                <p className="text-orange-300 uppercase tracking-widest text-sm font-semibold mb-3">
                  Our Approach
                </p>

                <h3 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-5">
                  Creativity.
                  <br />
                  Precision.
                  <br />
                  Excellence.
                </h3>

                <p className="text-gray-300 max-w-sm leading-relaxed">
                  Bringing ideas together through thoughtful design,
                  printing, and branding solutions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>


      {/* =========================================
          PART 2: MISSION AND VISION
          ========================================= */}

      <div className="w-full bg-[#f8f9fc] py-20">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">

            <p className="text-[#e78625] uppercase tracking-widest font-bold text-sm mb-3">
              Our Purpose
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213d] mb-4">
              What Drives Us
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our mission and vision guide the way we work,
              serve our clients, and approach every project.
            </p>

          </div>

          {/* Two-column mission and vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {/* Mission card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">

              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target size={30} className="text-[#e78625]" />
              </div>

              <h3 className="text-2xl font-bold text-[#14213d] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide creative, reliable, and quality printing
                and branding solutions that help our clients bring
                their ideas to life.
              </p>

            </div>

            {/* Vision card */}
            <div className="bg-[#14213d] rounded-2xl p-8 sm:p-10 shadow-sm">

              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Eye size={30} className="text-[#e78625]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300 leading-relaxed">
                To be a trusted provider of innovative printing,
                branding, and creative solutions.
              </p>

            </div>

          </div>
        </div>
      </div>


      {/* =========================================
          PART 3: CORE VALUES
          ========================================= */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-24">

        <div className="text-center max-w-2xl mx-auto mb-12">

          <p className="text-[#e78625] uppercase tracking-widest font-bold text-sm mb-3">
            What We Stand For
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14213d] mb-4">
            Our Core Values
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The principles that shape our work and relationships
            with our clients.
          </p>

        </div>

        {/* NOTE:
            map() creates one card for every item in coreValues.
            To add another value, add another object to the array above. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {coreValues.map((value, index) => {

            // NOTE: Each object contains its own icon component.
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon background */}
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e78625] transition-colors duration-300">

                  <Icon
                    size={28}
                    className="text-[#e78625] group-hover:text-white transition-colors duration-300"
                  />

                </div>

                <h3 className="text-xl font-bold text-[#14213d] mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>

              </div>
            )
          })}

        </div>
      </div>


      {/* =========================================
          PART 4: WHY CHOOSE US
          ========================================= */}

      <div className="bg-[#14213d] py-20">

        <div className="max-w-7xl mx-auto px-5 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: Heading and description */}
            <div>

              <p className="text-orange-300 uppercase tracking-widest font-bold text-sm mb-3">
                The Motek Difference
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Why Choose
                <span className="text-[#e78625]"> Motek Inventions?</span>
              </h2>

              <p className="text-gray-300 leading-relaxed max-w-lg">
                We understand that quality presentation matters.
                We aim to deliver solutions that communicate your
                message clearly and represent your brand professionally.
              </p>

            </div>

            {/* RIGHT: Reasons list */}
            <div className="space-y-5">

              {/* NOTE:
                  map() displays each reason as a separate row.
                  Edit the reasons array near the top of this file. */}
              {reasons.map((reason) => (

                <div
                  key={reason}
                  className="flex items-start gap-4 border-b border-white/10 pb-5"
                >

                  <CheckCircle2
                    size={23}
                    className="text-[#e78625] shrink-0 mt-1"
                  />

                  <p className="text-white font-medium leading-relaxed">
                    {reason}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
