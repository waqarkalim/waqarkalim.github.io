import './styles.scss'

interface CardProps {
  date: string
  readTime: string
  websiteUrl: string
  title: string
  subtitle: string
}

const Card = ({ date, readTime, websiteUrl, title, subtitle }: CardProps) => (
  <section className="flex flex-col gap-2">
    <p className="text-sm uppercase text-gray-500">{`${date} (${readTime})`}</p>
    <a href={websiteUrl}>{title}</a>
    <p className="text-gray-400">{subtitle}</p>
  </section>
)

const Writing = () => (
  <section id="writing" className="flex flex-col gap-4">
    <h2 className="section__heading">Writing</h2>
    <div className="flex flex-col gap-12">
      <Card
        date="March 2022"
        readTime="3 min read"
        websiteUrl="https://medium.com/@waqar_kalim/javascript-using-the-spread-operator-405266faf42b"
        title="JavaScript — Using The Spread Operator (…)"
        subtitle="A simplified look at how to use the Spread Operator (…) in JavaScript"
      />
    </div>
  </section>
)

export default Writing
