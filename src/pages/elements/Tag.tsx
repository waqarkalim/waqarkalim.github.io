import './styles.scss'

interface ITagProps {
  text: string
}

const Tag = ({ text }: ITagProps) => {
  return <span className="tag">{text}</span>
}

export default Tag
