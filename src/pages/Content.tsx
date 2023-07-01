import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Research from './Research'
import Writing from './Writing'

const Content = () => {
  return (
    <section className="mx-6 my-8 flex flex-grow flex-col gap-8">
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
