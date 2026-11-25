
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'

export const Portfolio = () => {

  // NOTE 1:
  // These are the portfolio categories.
  // The first option, "All", displays every project.
  //
  // You can add more categories here, but make sure
  // the project objects below use matching category names.

  const categories = [
    'All',
    'Printing',
    'Branding',
    'Design',
    'Signage',
  ]


  // NOTE 2:
  // This array contains the portfolio projects.
  //
  // To add a project, copy an object and change:
  // title, category, image, and description.
  //
  // Replace these temporary Unsplash images with
  // photographs of Motek's actual completed work.

  const projects = [
    {
      id: 1,
      title: 'Corporate Print Materials',
      category: 'Printing',
      description: 'Professional printed materials for business communication.',
      image:
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'A consistent visual identity for a growing business.',
      image:
        'https://images.unsplash.com/photo-1634942536790-2534dbd4a4b6?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 3,
      title: 'Creative Poster Design',
      category: 'Design',
      description: 'Eye-catching artwork for advertising and promotion.',
      image:
        'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 4,
      title: 'Promotional Branding',
      category: 'Branding',
      description: 'Branded materials designed to improve brand visibility.',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 5,
      title: 'Large Format Graphics',
      category: 'Signage',
      description: 'Large visual graphics for displays and promotion.',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 6,
      title: 'Business Stationery',
      category: 'Printing',
      description: 'Printed stationery for a professional business image.',
      image:
        'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1000&q=85',
    },
  ]


  // NOTE 3: REACT STATE
  //
  // activeCategory stores the category currently selected.
  // Initially, it is "All".
  //
  // setActiveCategory changes the selected category
  // whenever a visitor clicks a filter button.

  const [activeCategory, setActiveCategory] = useState('All')


  // NOTE 4: FILTERING THE PROJECTS
  //
  // filter() creates a new array containing only
  // projects that match the selected category.
  //
  // If "All" is selected, every project is displayed.

  const filteredProjects = projects.filter((project) => {
    return (
      activeCategory === 'All' ||
      project.category === activeCategory
    )
  })


  return (

    <section id="portfolio" className="w-full bg-white">

      {/* ======================================
          PART 1: PORTFOLIO INTRODUCTION
          ====================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-20 lg:pt-24">

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#e78625] uppercase tracking-widest font-bold text-sm mb-4">
            Our Work
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14213d] leading-tight mb-5">
            Ideas Into Reality.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Explore a selection of creative, printing, and branding
            projects. Every project represents an opportunity to
            turn an idea into something meaningful.
          </p>

        </div>
      </div>


      {/* ======================================
          PART 2: CATEGORY FILTER BUTTONS
          ====================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-12">

        <div className="flex flex-wrap justify-center gap-3">

          {/* NOTE 5:
              We use map() to create a button for each category.
              Clicking a button updates activeCategory. */}

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-3 rounded-full text-sm font-semibold
                transition-all duration-300
                ${
                  activeCategory === category
                    ? 'bg-[#e78625] text-white shadow-md'
                    : 'bg-[#f3f4f6] text-[#14213d] hover:bg-orange-100'
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>
      </div>


      {/* ======================================
          PART 3: PROJECT GALLERY
          ====================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14 lg:py-16">

        {/* Responsive gallery:
            Mobile: 1 column
            Tablet: 2 columns
            Desktop: 3 columns */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* NOTE 6:
              We map over filteredProjects instead of projects.
              This is what makes the category filters work. */}

          {filteredProjects.map((project) => (

            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >

              {/* Project image */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-[#14213d]/0 group-hover:bg-[#14213d]/20 transition-colors duration-300"></div>

                {/* Category label */}
                <span className="absolute top-4 left-4 bg-white text-[#14213d] text-xs font-bold px-4 py-2 rounded-full">
                  {project.category}
                </span>

                {/* Decorative icon */}
                <div className="absolute bottom-4 right-4 bg-[#e78625] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={20} />
                </div>

              </div>


              {/* Project information */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-[#14213d] mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

              </div>

            </article>

          ))}

        </div>


        {/* NOTE 7:
            This message appears if a category has no projects. */}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">

            <ImageIcon
              size={45}
              className="mx-auto text-gray-400 mb-4"
            />

            <h3 className="text-xl font-bold text-[#14213d] mb-2">
              No Projects Found
            </h3>

            <p className="text-gray-500">
              There are currently no projects in this category.
            </p>

          </div>
        )}

      </div>


      {/* ======================================
          PART 4: CONTACT CALL TO ACTION
          ====================================== */}

      <div className="max-w-7xl mx-auto px-5 lg:px-10 pb-20">

        <div className="bg-[#14213d] rounded-3xl p-8 sm:p-12 text-center">

          <p className="text-orange-300 uppercase tracking-widest text-sm font-bold mb-3">
            Have Something in Mind?
          </p>

          <h2 className="text-white text-2xl sm:text-4xl font-extrabold mb-5">
            Let's Work on Your Next Project.
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need printing, branding, or creative design,
            let's discuss your next project.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#e78625] hover:bg-[#cf741d] text-white px-7 py-4 rounded-md font-semibold transition-all duration-300"
          >
            Start a Project
            <ArrowUpRight size={19} />
          </Link>

        </div>

      </div>

    </section>
  )
}
