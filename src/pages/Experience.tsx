import { ExperienceCard } from './elements/Card'
import Divider from './elements/Divider'
import './styles.scss'

const ViewResumeAnchorLink = () => (
  <a
    className="text-base hover:underline"
    href="https://docs.google.com/document/d/1mmifju4UaGWb8G7bzLc3OALdwOQs_wm-ZaHk3Ysd6kk/edit?usp=sharing"
    target="_blank"
  >
    View Resume 🔗
  </a>
)

const Experience = () => (
  <section id="experience" className="section">
    <h2 className="section__heading">Experience</h2>
    <div className="flex flex-col gap-12">
      <ExperienceCard
        id="carfax"
        type="experience"
        ariaLabel="Go to CARFAX page"
        date="Jan 2022 - Present"
        position="Associate Software Engineer"
        companyName="CARFAX"
        websiteUrl="https://www.carfax.com/"
        description="Made an impact by improving consumer-facing applications using Typescript, React, and Java, resulting in better KPIs. Also, worked on internal tools which made business logic updates faster to implement. These contributions have optimized processes, improved the user experience, and overall improved KPIs."
        tags={['TypeScript', 'React', 'Java', 'Git', 'GitLab', 'AWS']}
      />
      <Divider />
      <ExperienceCard
        id="big-blue-bubble"
        type="experience"
        ariaLabel="Go to Big Blue Bubble page"
        date="May 2019 - Aug 2020"
        position="Game Analyst Intern"
        companyName="Big Blue Bubble"
        websiteUrl="https://www.bigbluebubble.com/"
        description="Made an impact by analyzing data using SQL and Redshift, providing valuable insights for informed decision-making. Also, worked on an internal React-based tool, streamlining content updates and improving the user experience. These contributions optimized processes and facilitated data-driven decision-making."
        tags={['JavaScript', 'Java', 'Python', 'SQL', 'Docker', 'AWS']}
      />
      <Divider />
      <ViewResumeAnchorLink />
    </div>
  </section>
)

export default Experience
