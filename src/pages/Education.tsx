import './styles.scss'

const Education = () => {
  return (
    <section id="education" className="flex flex-col gap-4">
      <h2 className="section__heading">Education</h2>
      <section id="bachelors" className="flex flex-col gap-2">
        <p className="text-sm uppercase text-gray-500">2016 - 2021</p>
        <a href="https://www.uwo.ca/">
          Western University | Bachelor of Science
        </a>
        <p className="text-gray-400">
          GPA: 3.7 / 4.0 | Dean's Honour List (4 Years)
        </p>
        <p className="text-gray-400">
          Honours Specialization in Computer Science
        </p>
      </section>
    </section>
  )
}

export default Education
