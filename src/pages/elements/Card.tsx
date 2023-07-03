import Tag from './Tag'

interface CardProps<T extends 'experience' | 'project'> {
  id: string
  type: T
  date: string
  websiteUrl: string
  description: string
  tags: string[]
  position?: T extends 'experience' ? string : never
  projectName?: T extends 'project' ? string : never
  eventName?: T extends 'project' ? string : never
  winner?: T extends 'project' ? boolean : never
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
}: CardProps<'experience' | 'project'>) => {
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
