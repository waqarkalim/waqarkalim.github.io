import { EducationCard } from './elements/Card'
import './styles.scss'

const Education = () => (
  <section id="education" className="section">
    <h2 className="section__heading">Education</h2>
    <EducationCard
      id="education"
      type="education"
      universityName="Western University"
      gpa={3.7}
      date="Sept 2016 - May 2021"
      websiteUrl="https://www.uwo.ca/"
      description="Honours Specialization in Computer Science"
      achievementText="Dean's Honour List (4 Years)"
      programName="Bachelor of Science"
    />
  </section>
)

export default Education
