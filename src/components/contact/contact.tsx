import useHover from '@react-hook/hover'
import { FC, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GitHub, Linkedin, Mail, User } from 'react-feather'
import { useStyles } from './styles'
import {
  COLOR_EMAIL,
  COLOR_GITHUB,
  COLOR_LINKEDIN,
  COLOR_RESUME,
} from '../../constants'

interface ContactItemProps {
  backgroundColor: string
}

const ContactItem: FC<ContactItemProps> = ({ children, backgroundColor }) => {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  const classes = useStyles({ backgroundColor, isHovering })

  return (
    <Link to="/" className={classes.link} ref={ref}>
      {children}
    </Link>
  )
}

export const Contact: FC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.container}>
      <ContactItem backgroundColor={COLOR_LINKEDIN}>
        <span className={classes.name}>Linkedin</span>
        <Linkedin className={classes.logo} size={28} />
      </ContactItem>

      <ContactItem backgroundColor={COLOR_GITHUB}>
        <span className={classes.name}>GitHub</span>
        <GitHub className={classes.logo} size={28} />
      </ContactItem>

      <ContactItem backgroundColor={COLOR_EMAIL}>
        <span className={classes.name}>Email</span>
        <Mail className={classes.logo} size={28} />
      </ContactItem>

      <ContactItem backgroundColor={COLOR_RESUME}>
        <span className={classes.name}>Resume</span>
        <User className={classes.logo} size={28} />
      </ContactItem>
    </div>
  )
}
