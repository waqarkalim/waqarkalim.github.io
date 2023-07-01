import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Research from './Research'
import Writing from './Writing'

const Content = () => {
  return (
    <section className="flex flex-col flex-grow gap-8 mx-6 my-8 sm:mx-12 sm:mb-24 sm:gap-24">
      <About />
      <Education />
      <Experience />
      <Projects />
      <Writing />
      <Research />
    </section>
  )
}

export default Content
