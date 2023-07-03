import { WritingCard } from './elements/Card'
import './styles.scss'

const Writing = () => (
  <section id="writing" className="section">
    <h2 className="section__heading">Writing</h2>
    <div className="flex flex-col gap-12">
      <WritingCard
        title="JavaScript — Using The Spread Operator (…)"
        readTime="3 min read"
        id="javascript-using-the-spread-operator"
        type="writing"
        date="March 2022"
        websiteUrl="https://medium.com/@waqar_kalim/javascript-using-the-spread-operator-405266faf42b"
        description="A simplified look at how to use the Spread Operator (…) in JavaScript"
      />
    </div>
  </section>
)

export default Writing
