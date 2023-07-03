import useIsLaptopOrGreater from '../../hooks/useIsLaptopOrGreater'
import Tag from './Tag'

interface CardProps<T extends 'experience' | 'project'> {
  id: string
  type: T
  date: string
  websiteUrl: string
  description: string
  tags: string[]
  position?: T extends 'experience' ? string : never
  companyName?: T extends 'experience' ? string : never
  projectName?: T extends 'project' ? string : never
  eventName?: T extends 'project' ? string : never
  winner?: T extends 'project' ? boolean : never
}

interface LinkProps {
  id: string
  href: string
  children: any
  className?: string
}

const Article = ({ id, href, className, children }: LinkProps) => {
  const isLaptopOrGreater = useIsLaptopOrGreater()

  return isLaptopOrGreater ? (
    <a id={id} href={href} className={`${className || ''}`}>
      {children}
    </a>
  ) : (
    <article id={id} className={`${className || ''}`}>
      {children}
    </article>
  )
}

const Link = ({ href, className, children }: Omit<LinkProps, 'id'>) => {
  const isLaptopOrGreater = useIsLaptopOrGreater()

  return isLaptopOrGreater ? (
    <p className={`${className || ''}`}>{children}</p>
  ) : (
    <a href={href} className={`${className || ''}`}>
      {children}
    </a>
  )
}

const Card = ({
  id,
  type,
  date,
  eventName,
  position,
  companyName,
  websiteUrl,
  projectName,
  winner,
  description,
  tags,
}: CardProps<'experience' | 'project'>) => (
  <Article id={id} href={websiteUrl} className="card section sm:flex-row">
    <div className="flex flex-row flex-grow gap-1 date sm:flex-col">
      <p>{date}</p>
    </div>
    <div className="flex flex-col gap-2 sm:w-3/4">
      <Link href={websiteUrl}>
        {type === 'experience' ? (
          <>
            {position} - {companyName}
          </>
        ) : (
          <>
            {projectName} - {type === 'project' ? eventName : ''}
            {winner ? <span>🥇</span> : ''}
          </>
        )}
      </Link>
      <p className="description__text">{description}</p>
      <div className="flex flex-row flex-wrap justify-start gap-2 align-middle">
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`} text={tag} />
        ))}
      </div>
    </div>
  </Article>
)

export default Card
