import './styles.scss'

interface CardProps {
  date: string
  websiteUrl: string
  title: string
}

const Card = ({ date, websiteUrl, title }: CardProps) => (
  <section className="flex flex-col gap-2">
    <p className="text-sm uppercase text-gray-500">
      {`${date} (Published Date)`}
    </p>
    <a href={websiteUrl}>{title}</a>
  </section>
)

const Research = () => (
  <section id="research" className="flex flex-col gap-4">
    <h2 className="section__heading">Research</h2>
    <div className="flex flex-col gap-12">
      <Card
        date="October 2022"
        websiteUrl="https://aclanthology.org/2022.coling-1.207.pdf"
        title="Method Entity Extraction From Biomedical Text"
      />
    </div>
  </section>
)

export default Research
