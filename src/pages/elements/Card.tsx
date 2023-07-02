import Tag from './Tag'

interface CardProps {
  id: string
  type: 'experience' | 'project'
  date: string
  eventName: string
  position: string
  websiteUrl: string
  projectName: string
  winner: boolean
  description: string
  tags: string[]
}

const Card = ({
  id,
  type,
  date,
  eventName,
  position,
  websiteUrl,
  projectName,
  winner,
  description,
  tags,
}: CardProps) => {
  return (
    <section id={id} className="section sm:flex-row">
      <div className="flex flex-row flex-grow gap-1 date sm:flex-col">
        <p>{date}</p>
        {type === 'project' ? (
          <p className="sm:hidden">{`(${eventName})`}</p>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:w-3/4">
        <a href={websiteUrl}>
          {type === 'experience' ? (
            position
          ) : (
            <>
              {projectName}
              {winner ? <span>🥇</span> : ''}
            </>
          )}
        </a>
        <p className="description__text">{description}</p>
        <div className="flex flex-row flex-wrap justify-start gap-2 align-middle">
          {tags.map((tag, index) => (
            <Tag key={`${tag}-${index}`} text={tag} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Card
