import { ReactNode } from 'react'
import useIsLaptopOrGreater from '../../hooks/useIsLaptopOrGreater'
import Tag from './Tag'

interface LinkProps {
  id: string
  href: string
  children: ReactNode
  className?: string
}

interface IBaseCard {
  id: string
  date: string
  websiteUrl: string
}

interface IExperienceCard extends IBaseCard {
  type: 'experience'
  position: string
  companyName: string
  description: string
  tags: string[]
}

interface IProjectCard extends IBaseCard {
  type: 'project'
  projectName: string
  eventName: string
  winner: boolean
  description: string
  tags: string[]
}

interface IEducationCard extends IBaseCard {
  type: 'education'
  universityName: string
  programName: string
  description: string
  gpa: number
  achievementText: string
}

interface IWritingCard extends IBaseCard {
  type: 'writing'
  title: string
  description: string
  readTime: string
  tags?: string[]
}

interface IResearchCard extends IBaseCard {
  type: 'research'
  title: string
  tags?: string[]
}

interface ICardContainer {
  id: string
  websiteUrl: string
  date: string
  children: ReactNode
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
    <p className={`${className || ''} font-medium`}>{children}</p>
  ) : (
    <a href={href} className={`${className || ''} font-medium`}>
      {children}
    </a>
  )
}

const CardContainer = ({ id, websiteUrl, date, children }: ICardContainer) => (
  <Article id={id} href={websiteUrl} className="card section sm:flex-row">
    <p className="date flex w-full flex-grow flex-row gap-1 sm:flex-col md:w-1/3">
      {date}
    </p>
    <div className="flex flex-col gap-2 sm:w-3/4">{children}</div>
  </Article>
)

const ExperienceCard = (props: IExperienceCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link
      href={props.websiteUrl}
    >{`${props.position} - ${props.companyName}`}</Link>
    <p className="description__text">{props.description}</p>
    <div className="tag__list">
      {props.tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} text={tag} />
      ))}
    </div>
  </CardContainer>
)

const EducationCard = (props: IEducationCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link
      href={props.websiteUrl}
    >{`${props.universityName} - ${props.programName}`}</Link>
    <p className="subtitle-text">{`GPA: ${props.gpa} / 4.0`}</p>
    <p className="subtitle-text">{props.achievementText}</p>
    <p className="subtitle-text">{props.description}</p>
  </CardContainer>
)

const ProjectCard = (props: IProjectCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link href={props.websiteUrl}>
      {props.projectName} - {props.eventName}
      {props.winner ? <span>🥇</span> : <></>}
    </Link>
    <p className="description__text">{props.description}</p>
    <div className="tag__list">
      {props.tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} text={tag} />
      ))}
    </div>
  </CardContainer>
)

const WritingCard = (props: IWritingCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link href={props.websiteUrl}>{props.title}</Link>
    <p className="description__text">{props.description}</p>
    <div className="tag__list">
      <Tag key={`${props.readTime}-0`} text={props.readTime} />
      {props?.tags &&
        props.tags.map((tag, index) => (
          <Tag key={`${tag}-${index + 1}`} text={tag} />
        ))}
    </div>
  </CardContainer>
)

const ResearchCard = (props: IResearchCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link href={props.websiteUrl}>{props.title}</Link>
    {props?.tags && (
      <div className="tag__list">
        {props.tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`} text={tag} />
        ))}
      </div>
    )}
  </CardContainer>
)

export { EducationCard, ProjectCard, ExperienceCard, WritingCard, ResearchCard }
