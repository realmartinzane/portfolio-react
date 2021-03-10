import { FC } from 'react'
import { useStyles } from './styles'

export const Footer: FC = () => {
  const classes = useStyles({})

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        <div>© 2021 Martin Zane. All Rights Reserved.</div>
        <div>
          Email:{' '}
          <a href="mailto:realmartinzane@gmail.com" className={classes.link}>
            realmartinzane@gmail.com
          </a>
        </div>
        <div>
          Tel:{' '}
          <a href="tel:+46729726764" className={classes.link}>
            +46729726764
          </a>
        </div>
      </div>
    </footer>
  )
}
