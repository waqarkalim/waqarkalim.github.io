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
        description="Made an impact by improving consumer-facing applications using Typescript, React, and Java, resulting in better KPIs. Also, worked on internal tools which made business logic updates faster to implement. These contributions have optimized processes, improved the user experience, and overall improved KPIs."
        tags={['React', 'TypeScript', 'Java', 'Git', 'GitLab', 'AWS']}
      />
      <Card
        id="big-blue-bubble"
        type="experience"
        date="May 2019 - Aug 2020"
        position="Game Analyst Intern"
        websiteUrl="https://www.bigbluebubble.com/"
        description="Made an impact by analyzing data using SQL and Redshift, providing valuable insights for informed decision-making. Also, worked on an internal React-based tool, streamlining content updates and improving the user experience. These contributions optimized processes and facilitated data-driven decision-making."
        tags={['JavaScript', 'Java', 'Python', 'SQL', 'Docker', 'AWS']}
      />
      <ViewResumeAnchorLink />
    </div>
  </section>
)

export default Experience
