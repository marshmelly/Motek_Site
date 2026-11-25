
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Printer,
  Palette,
  Shirt,
  CheckCircle2,
} from 'lucide-react'

export const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-80px)] bg-[#f8f9fc] flex items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-5 lg:px-10 py-16 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE - CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#e78625] px-4 py-2 rounded-full text-sm font-semibold mb-7">
              <span className="w-2 h-2 rounded-full bg-[#e78625]"></span>
              DESIGN • PRINT • BRAND
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14213d] leading-tight mb-6">
              Bringing Your
              <span className="block text-[#e78625]">
                Ideas To Life.
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-9">
              From professional printing to creative branding solutions,
              Motek Inventions helps businesses and individuals make
              a lasting impression through quality and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 bg-[#e78625] hover:bg-[#cf741d] text-white px-7 py-4 rounded-md font-semibold transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 border border-[#14213d] text-[#14213d] hover:bg-[#14213d] hover:text-white px-7 py-4 rounded-md font-semibold transition-all duration-300"
              >
                Get a Quote
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#e78625]" />
                Quality Work
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#e78625]" />
                Creative Solutions
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#e78625]" />
                Reliable Service
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - VISUAL PANEL */}
          <div className="relative">
            <div className="absolute -top-10 -right-8 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>

            <div className="relative bg-[#14213d] rounded-3xl p-7 sm:p-10 min-h-[420px] flex flex-col justify-between shadow-2xl">

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-orange-300 text-sm font-semibold tracking-widest uppercase">
                    Motek Inventions
                  </p>
                  <h2 className="text-white text-3xl sm:text-4xl font-bold mt-3 leading-tight">
                    Creativity
                    <br />
                    Meets Quality.
                  </h2>
                </div>

                <div className="bg-white/10 p-4 rounded-2xl">
                  <Printer size={34} className="text-[#e78625]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 my-10">

                <div className="bg-white rounded-2xl p-5 rotate-[-3deg] shadow-lg">
                  <div className="bg-orange-100 rounded-xl p-4 mb-4">
                    <Palette size={34} className="text-[#e78625]" />
                  </div>
                  <p className="text-[#14213d] font-bold text-lg">
                    Print & Design
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Ideas made visible.
                  </p>
                </div>

                <div className="bg-[#e78625] rounded-2xl p-5 rotate-[3deg] mt-8 shadow-lg">
                  <div className="bg-white/20 rounded-xl p-4 mb-4">
                    <Shirt size={34} className="text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">
                    Branding
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Make your brand stand out.
                  </p>
                </div>

              </div>

              <div className="flex items-center justify-between border-t border-white/20 pt-5">
                <p className="text-white/70 text-sm">
                  Your vision. Our creativity.
                </p>
                <ArrowUpRight size={22} className="text-[#e78625]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
