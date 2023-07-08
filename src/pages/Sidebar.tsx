import { useState } from 'react'
import GithubIcon from './icons/Github'
import LinkedInIcon from './icons/LinkedIn'
import TwitterIcon from './icons/Twitter'

import { name, position, initialIntro } from '../constants'

const NAV_HEADER = [
  'about',
  'experience',
  'education',
  'projects',
  'writing',
  'research',
]

const Sidebar = () => {
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
      className="flex-start flex flex-grow flex-col justify-center gap-8 px-6 py-12 sm:px-12 sm:py-20 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:justify-between lg:px-0 lg:py-24 lg:pl-20 xl:w-1/4"
    >
      <div className="flex flex-col gap-4">
        <h1 className="heading-text text-4xl font-bold sm:text-5xl">{name}</h1>
        <h2 className="subheading-text text-xl font-normal">{position}</h2>
        <p className="subtitle-text">{initialIntro}</p>
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
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/waqar-kalim/"
              aria-label="linked in"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/waqar_kalim" aria-label="twitter">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Sidebar
