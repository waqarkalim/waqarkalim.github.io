const Sidebar = () => {
  return (
    <section
      id="sidebar"
      className="flex flex-col justify-center flex-grow gap-8 px-6 py-12 flex-start sm:px-12 sm:pt-24"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Waqar Bin Kalim</h1>
        <h2 className="text-xl font-light">Associate Software Engineer</h2>
        <p className="text-gray-400">
          I enjoy building useful, accessible, and impactful projects
        </p>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/waqarkalim" aria-label="github">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/waqar-kalim/"
          aria-label="linked in"
        >
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
        <a href="https://twitter.com/waqar_kalim" aria-label="twitter">
          <i className="fa-brands fa-twitter fa-xl"></i>
        </a>
      </div>
    </section>
  )
}

export default Sidebar
