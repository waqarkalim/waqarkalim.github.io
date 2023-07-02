import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Research from './Research'
import Writing from './Writing'

const Content = () => {
  return (
    <section className="flex flex-col flex-grow gap-8 px-6 py-8 sm:px-12 sm:py-20 sm:gap-24 lg:w-1/2 lg:px-0 lg:py-24 lg:pr-24 lg:overflow-y-auto xl:w-1/4">
      <About />
      <Education />
      <Experience />
      <Projects />
      <Writing />
      <Research />
      <footer className="flex justify-center gap-1 p-2 text-gray-500 align-middle">
        Developed by
        <a href="https://github.com/waqarkalim" className="text-gray-300">
          Waqar Bin Kalim
        </a>
      </footer>
    </section>
  )
}

export default Content
