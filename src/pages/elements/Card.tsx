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
  type: 'experience' | 'project' | 'education'
  date: string
  websiteUrl: string
  description: string
}

interface IExperienceCard extends IBaseCard {
  position: string
  companyName: string
  tags: string[]
}

interface IProjectCard extends IBaseCard {
  projectName: string
  eventName: string
  winner: boolean
  tags: string[]
}

interface IEducationCard extends IBaseCard {
  universityName: string
  programName: string
  gpa: number
  achievementText: string
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
    <p className={`${className || ''}`}>{children}</p>
  ) : (
    <a href={href} className={`${className || ''}`}>
      {children}
    </a>
  )
}

const CardContainer = ({ id, websiteUrl, date, children }: ICardContainer) => (
  <Article id={id} href={websiteUrl} className="card section sm:flex-row">
    <p className="date flex flex-row flex-grow gap-1 sm:flex-col">{date}</p>
    <div className="flex flex-col gap-2 sm:w-3/4">{children}</div>
  </Article>
)

const ExperienceCard = (props: IExperienceCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link
      href={props.websiteUrl}
    >{`${props.position} - ${props.companyName}`}</Link>
    <p className="description__text">{props.description}</p>
    <div className="flex flex-row flex-wrap justify-start gap-2 align-middle">
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
    <p className="text-slate-400">{`GPA: ${props.gpa} / 4.0`}</p>
    <p className="text-slate-400">{props.achievementText}</p>
    <p className="text-slate-400">{props.description}</p>
  </CardContainer>
)

const ProjectCard = (props: IProjectCard) => (
  <CardContainer id={props.id} websiteUrl={props.websiteUrl} date={props.date}>
    <Link href={props.websiteUrl}>
      {`${props.projectName} - ${props.eventName}`}
      {props.winner ? <span>🥇</span> : <></>}
    </Link>
    <p className="description__text">{props.description}</p>
    <div className="flex flex-row flex-wrap justify-start gap-2 align-middle">
      {props.tags.map((tag, index) => (
        <Tag key={`${tag}-${index}`} text={tag} />
      ))}
    </div>
  </CardContainer>
)

export { EducationCard, ProjectCard, ExperienceCard }
