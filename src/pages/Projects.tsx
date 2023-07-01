import './styles.scss'

interface CardProps {
  id: string
  date: string
  eventName: string
  websiteUrl: string
  projectName: string
  winner: boolean
  description: string
  tags: string[]
}

const Card = ({
  id,
  date,
  eventName,
  websiteUrl,
  projectName,
  winner,
  description,
  tags,
}: CardProps) => (
  <section id={id} className="flex flex-col gap-2">
    <p className="text-sm uppercase text-gray-500">
      {`${date} (${eventName})`}
    </p>
    <a href={websiteUrl}>
      {projectName}
      {winner ? <span>🥇</span> : ''}
    </a>
    <p className="text-gray-400">{description}</p>
    <div className="flex flex-row flex-wrap justify-start gap-2 align-middle">
      {tags.map((tag) => (
        <span className="rounded-full bg-gray-800 p-1 px-3 text-sm font-light">
          {tag}
        </span>
      ))}
    </div>
  </section>
)

const ViewProjectsAnchorLink = () => (
  <a className="text-md" href="https://github.com/waqarkalim?tab=repositories">
    View Projects 🔗
  </a>
)

const Projects = () => (
  <section id="projects" className="flex flex-col gap-4">
    <h2 className="section__heading">Projects</h2>
    <div className="flex flex-col gap-12">
      <Card
        id="merge-countflicts"
        date="January 2021"
        eventName="Hack the North 2020++"
        websiteUrl="https://github.com/andrewhlu/merge-countflicts"
        projectName="Merge Countflicts"
        winner={true}
        description="Collaborated with a team of 4 people to develop a real-time multiplayer game within a 36-hour deadline"
        tags={[
          'JavaScript',
          'React',
          'Node.js',
          'Express',
          'Socket.io',
          'CockroachDB',
        ]}
      />
      <Card
        id="mood-for-thought"
        date="November 2020"
        eventName="Hack Western 7"
        websiteUrl="https://github.com/waqarkalim/dailyjournal"
        projectName="Mood For Thought"
        winner={false}
        description="Worked with a group of 4 people to develop a journaling application"
        tags={['JavaScript', 'React', 'Node.js', 'Express', 'MySQL']}
      />
      <ViewProjectsAnchorLink />
    </div>
  </section>
)

export default Projects
