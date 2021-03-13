import useHover from '@react-hook/hover'
import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Button: FC = ({ children }) => {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  const classes = useStyles({ isHovering })

  return (
    <Link to="/projects" className={classes.buttonContainer} ref={ref}>
      <span className={classes.button}>{children}</span>
      <span className={classes.buttonHovered}>{children}</span>
    </Link>
  )
}

const Word: FC = ({ children }) => {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  const [isActive, setIsActive] = useState(false)
  const classes = useStyles({ isActive })

  const activate = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 2000)
  }

  useEffect(() => {
    if (isHovering) activate()
  })

  return (
    <div className={classes.wordContainer} ref={ref}>
      <div className={classes.word}>{children}</div>
      <div className={classes.wordHovered}>{children}</div>
    </div>
  )
}

export const Hero: FC = () => {
  const classes = useStyles({})

  const paragraphs = [
    "I'm a web designer & developer currently based in Stockholm, Sweden",
    "Hit me up and let's create something special.",
  ]

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <h1 className={classes.title}>Yo, it&apos;s Martin Zane</h1>
        {paragraphs.map((paragraph, pIdx) => (
          <div key={pIdx} className={classes.paragraph}>
            {paragraph.split(' ').map((word, wIdx) => (
              <Word key={wIdx}>{word}</Word>
            ))}
          </div>
        ))}
        <Button>View Projects</Button>
      </div>
    </div>
  )
}
