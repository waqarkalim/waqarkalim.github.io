import './styles.scss'

interface CardProps {
  id: string
  range: string
  position: string
  websiteUrl: string
  description: string
  tags: string[]
}

const Card = ({
  id,
  range,
  position,
  websiteUrl,
  description,
  tags,
}: CardProps) => (
  <section id={id} className="flex flex-col gap-2">
    <p className="text-sm uppercase text-gray-500">{range}</p>
    <div className="flex flex-col gap-2">
      <a href={websiteUrl}>{position}</a>
      <p className="text-gray-400">{description}</p>
      <div className="flex flex-row flex-wrap justify-start gap-2 align-middle">
        {tags.map((tag) => (
          <span className="rounded-full bg-gray-800 p-1 px-3 text-sm font-light">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
)

const ViewResumeAnchorLink = () => (
  <a className="text-md" href="assets/resume.pdf">
    View Resume 🔗
  </a>
)

const Experience = () => (
  <section id="experience" className="flex flex-col gap-4">
    <h2 className="section__heading">Experience</h2>
    <div className="flex flex-col gap-12">
      <Card
        id="carfax"
        range="Jan 2022 - Present"
        position="Associate Software Engineer"
        websiteUrl="https://www.carfax.com/"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo nihil omnis recusandae excepturi, repellat officia incidunt explicabo nisi accusantium autem aliquid? Quos quibusdam, itaque earum eius odit tempora ullam!"
        tags={['React', 'TypeScript', 'Java', 'Git', 'GitLab', 'AWS']}
      />
      <Card
        id="big-blue-bubble"
        range="May 2019 - Aug 2020"
        position="Game Analyst Intern"
        websiteUrl="https://www.bigbluebubble.com/"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo nihil omnis recusandae excepturi, repellat officia incidunt explicabo nisi accusantium autem aliquid? Quos quibusdam, itaque earum eius odit tempora ullam!"
        tags={['JavaScript', 'Java', 'Python', 'SQL', 'Docker', 'AWS']}
      />
      <ViewResumeAnchorLink />
    </div>
  </section>
)

export default Experience
