import Card from './elements/Card'
import './styles.scss'

const ViewResumeAnchorLink = () => (
  <a className="text-base" href="assets/resume.pdf">
    View Resume 🔗
  </a>
)

const Experience = () => (
  <section id="experience" className="flex flex-col gap-4">
    <h2 className="section__heading">Experience</h2>
    <div className="flex flex-col gap-12">
      <Card
        id="carfax"
        type="experience"
        date="Jan 2022 - Present"
        position="Associate Software Engineer"
        websiteUrl="https://www.carfax.com/"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo nihil omnis recusandae excepturi, repellat officia incidunt explicabo nisi accusantium autem aliquid? Quos quibusdam, itaque earum eius odit tempora ullam!"
        tags={['React', 'TypeScript', 'Java', 'Git', 'GitLab', 'AWS']}
        eventName={''}
        projectName={''}
        winner={false}
      />
      <Card
        id="big-blue-bubble"
        type="experience"
        date="May 2019 - Aug 2020"
        position="Game Analyst Intern"
        websiteUrl="https://www.bigbluebubble.com/"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo nihil omnis recusandae excepturi, repellat officia incidunt explicabo nisi accusantium autem aliquid? Quos quibusdam, itaque earum eius odit tempora ullam!"
        tags={['JavaScript', 'Java', 'Python', 'SQL', 'Docker', 'AWS']}
        eventName={''}
        projectName={''}
        winner={false}
      />
      <ViewResumeAnchorLink />
    </div>
  </section>
)

export default Experience
