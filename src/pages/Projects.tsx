import { ProjectCard } from './elements/Card'
import Divider from './elements/Divider'
import './styles.scss'

const ViewProjectsAnchorLink = () => (
  <a
    className="text-base hover:underline"
    href="https://github.com/waqarkalim?tab=repositories"
    target="_blank"
  >
    View More Projects 🔗
  </a>
)

const Projects = () => (
  <section id="projects" className="section">
    <h2 className="section__heading">Projects</h2>
    <div className="flex flex-col gap-12">
      <ProjectCard
        id="merge-countflicts"
        type="project"
        ariaLabel="Go to Merge Countflicts page"
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
      <Divider />
      <ProjectCard
        id="mood-for-thought"
        type="project"
        ariaLabel="Go to Mood For Thought page"
        date="November 2020"
        eventName="Hack Western 7"
        websiteUrl="https://github.com/waqarkalim/dailyjournal"
        projectName="Mood For Thought"
        winner={false}
        description="Worked with a group of 4 people to develop a journaling application"
        tags={['JavaScript', 'React', 'Node.js', 'Express', 'MySQL']}
      />
      <Divider />
      <ViewProjectsAnchorLink />
    </div>
  </section>
)

export default Projects
