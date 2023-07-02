import GithubIcon from './icons/Github'
import LinkedInIcon from './icons/LinkedIn'
import TwitterIcon from './icons/Twitter'

const Sidebar = () => {
  const size = '1.5rem'
  return (
    <section
      id="sidebar"
      className="flex flex-col justify-center flex-grow gap-8 px-6 py-12 flex-start sm:px-12 sm:py-20 lg:w-1/2 lg:max-h-screen lg:justify-between lg:px-0 lg:py-24 lg:pl-24 lg:sticky lg:top-0"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Waqar Bin Kalim</h1>
        <h2 className="text-xl font-light">Associate Software Engineer</h2>
        <p className="text-gray-400">
          I enjoy building useful, accessible, and impactful projects
        </p>
        <nav className="hidden lg:flex lg:py-4">
          <ul className="flex flex-col justify-center gap-4 align-middle">
            <li className="nav__listitem">
              <a href="#about" className="content-center">
                About
              </a>
            </li>
            <li className="nav__listitem">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav__listitem">
              <a href="#education">Education</a>
            </li>
            <li className="nav__listitem">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav__listitem">
              <a href="#writing">Writing</a>
            </li>
            <li className="nav__listitem">
              <a href="#research">Research</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/waqarkalim" aria-label="github">
          {/* <i className="fa-brands fa-github fa-xl"></i> */}
          {/* <GithubIcon aria-label="github" /> */}
          <GithubIcon width={size} height={size} />
        </a>
        <a
          href="https://www.linkedin.com/in/waqar-kalim/"
          aria-label="linked in"
        >
          {/* <i className="fa-brands fa-linkedin fa-xl"></i> */}
          <LinkedInIcon width={size} height={size} />
        </a>
        <a href="https://twitter.com/waqar_kalim" aria-label="twitter">
          {/* <i className="fa-brands fa-twitter fa-xl"></i> */}
          <TwitterIcon width={size} height={size} />
        </a>
      </div>
    </section>
  )
}

export default Sidebar
