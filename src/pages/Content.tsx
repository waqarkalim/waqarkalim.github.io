import About from './About'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Research from './Research'
import Writing from './Writing'

const Content = () => {
  return (
    <div className="flex flex-grow flex-col gap-8 px-6 py-8 sm:gap-24 sm:px-12 sm:py-20 lg:w-1/2 lg:overflow-y-auto lg:px-0 lg:py-24 lg:pr-24 xl:w-1/4">
      <main className="flex flex-col gap-8 sm:gap-24">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Writing />
        <Research />
      </main>
      <footer className="subtitle-text flex justify-center gap-1 p-2 align-middle">
        <p>
          Developed by{' '}
          <a href="https://github.com/waqarkalim" className="footer__link">
            {' '}
            Waqar Bin Kalim
          </a>
          , and design inspired by{' '}
          <a href="https://brittanychiang.com/" className="footer__link">
            Brittany Chiang
          </a>
          . Built with{' '}
          <a href="https:///react.dev/" className="footer__link">
            React
          </a>{' '}
          and{' '}
          <a href="https://tailwindcss.com/" className="footer__link">
            TailwindCSS
          </a>
          , and deployed with{' '}
          <a href="https://pages.github.com/" className="footer__link">
            GitHub Pages
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default Content
