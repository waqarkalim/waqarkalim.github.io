import useWindowSize from '../../hooks/useWindowSize'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../../tailwind.config.ts'

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

interface LinkProps {
  id: string
  href: string
  children: any
  className?: string
}

const Article = ({ id, href, className, children }: LinkProps) => {
  const size = useWindowSize()
  const fullConfig = resolveConfig(tailwindConfig) as any

  const isLaptopOrGreater =
    size[0] > Number(fullConfig.theme.screens.md.replaceAll('px', ''))

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
  const size = useWindowSize()
  const fullConfig = resolveConfig(tailwindConfig) as any

  const isLaptopOrGreater =
    size[0] > Number(fullConfig.theme.screens.md.replaceAll('px', ''))

  if (isLaptopOrGreater) {
    return <p className={`${className || ''}`}>{children}</p>
  } else {
    return (
      <a href={href} className={`${className || ''}`}>
        {children}
      </a>
    )
  }
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
}: CardProps<'experience' | 'project'>) => (
  <Article id={id} href={websiteUrl} className="card section sm:flex-row">
    <div className="flex flex-row flex-grow gap-1 date sm:flex-col">
      <p>{date}</p>
    </div>
    <div className="flex flex-col gap-2 sm:w-3/4">
      <Link href={websiteUrl}>
        {type === 'experience' ? (
          position
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
