import { FC, useRef, useState } from 'react'
import useHover from '@react-hook/hover'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

interface NavigationLinkProps {
  to: string
  setIsOpen: (value: boolean) => void
}

const NavigationLink: FC<NavigationLinkProps> = ({
  children,
  to,
  setIsOpen,
}) => {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  const classes = useStyles({ isHovering })

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <Link
      to={to}
      className={classes.navigationLink}
      ref={ref}
      onClick={handleClick}
    >
      <span className={classes.span}>{children}</span>
      <div className={classes.hover} />
    </Link>
  )
}

interface NavigationProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Navigation: FC<NavigationProps> = ({ isOpen, setIsOpen }) => {
  const classes = useStyles({ isOpen })

  return (
    <nav className={classes.navigation}>
      <div className={classes.navigationLinksContainer}>
        <NavigationLink to="/" setIsOpen={setIsOpen}>
          About
        </NavigationLink>
        <NavigationLink to="/projects" setIsOpen={setIsOpen}>
          Projects
        </NavigationLink>
      </div>
    </nav>
  )
}

interface BurgerBarProps {
  position: number
  isHovering: boolean
  isOpen: boolean
}

const BurgerBar: FC<BurgerBarProps> = ({ position, isHovering, isOpen }) => {
  const classes = useStyles({ position, isHovering, isOpen })

  return <div className={classes.burgerBar} />
}

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const isHovering = useHover(ref)
  const classes = useStyles({ isHovering, isOpen })

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <img
          src="/images/brand.png"
          alt="Martin Zane"
          className={classes.brand}
        />
      </Link>
      <button className={classes.burger} ref={ref} onClick={handleClick}>
        {[0, 1, 2].map((idx) => (
          <BurgerBar
            position={idx}
            isHovering={isHovering}
            key={idx}
            isOpen={isOpen}
          />
        ))}
      </button>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}
