import { useState } from 'react'
import GithubIcon from './icons/Github'
import LinkedInIcon from './icons/LinkedIn'
import TwitterIcon from './icons/Twitter'

const NAV_HEADER = [
  'about',
  'education',
  'experience',
  'projects',
  'writing',
  'research',
]

const Sidebar = () => {
  const size = '1.5rem'

  const [activeLink, setActiveLink] = useState<number>(
    window.location.hash
      ? NAV_HEADER.findIndex(
          (header) => header === window.location.hash.substring(1),
        )
      : 0,
  )

  return (
    <header
      id="sidebar"
      className="flex flex-col justify-center flex-grow gap-8 px-6 py-12 flex-start sm:px-12 sm:py-20 lg:w-1/2 lg:max-h-screen lg:justify-between lg:px-0 lg:py-24 lg:pl-24 lg:sticky lg:top-0 xl:w-1/4"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Waqar Bin Kalim</h1>
        <h2 className="text-xl font-normal">Associate Software Engineer</h2>
        <p className="text-gray-400">
          I enjoy building useful, accessible, and impactful projects
        </p>
        <nav className="hidden lg:flex lg:py-12" aria-label="site map">
          <ul className="flex flex-col justify-center gap-4 align-middle">
            {NAV_HEADER.map((header, index) => (
              <li
                key={`${header}-${index}`}
                className="nav__listitem"
                aria-label={`Go to the ${header} section`}
              >
                <a
                  href={`#${header}`}
                  className={`${activeLink === index ? 'active' : ''}`}
                  onClick={() => setActiveLink(index)}
                >
                  {header}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav aria-label="social links">
        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/waqarkalim" aria-label="github">
              <GithubIcon width={size} height={size} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/waqar-kalim/"
              aria-label="linked in"
            >
              <LinkedInIcon width={size} height={size} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/waqar_kalim" aria-label="twitter">
              <TwitterIcon width={size} height={size} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Sidebar
