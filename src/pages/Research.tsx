import { ResearchCard } from './elements/Card'
import './styles.scss'

const Research = () => (
  <section id="research" className="section">
    <h2 className="section__heading">Research</h2>
    <div className="flex flex-col gap-12">
      <ResearchCard
        type="research"
        title="Method Entity Extraction From Biomedical Text"
        id="method-entity-extraction-from-biomedical-text"
        date="October 2022"
        websiteUrl="https://aclanthology.org/2022.coling-1.207.pdf"
        tags={['Machine Learning', 'NLP', 'Python']}
      />
    </div>
  </section>
)

export default Research
