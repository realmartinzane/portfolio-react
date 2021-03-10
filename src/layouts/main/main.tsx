import { FC } from 'react'
import { Header, Footer } from 'components'
import { useStyles } from './styles'

export const MainLayout: FC = ({ children }) => {
  const classes = useStyles({})

  return (
    <div className={classes.mainLayout}>
      <Header />
      <div className={classes.mainLayoutContent}>{children}</div>
      <Footer />
    </div>
  )
}
