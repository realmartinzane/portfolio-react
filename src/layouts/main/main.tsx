import { FC } from 'react'
import { Header, Footer, Contact } from 'components'

export const MainLayout: FC = ({ children }) => (
  <div>
    <Header />
    {children}

    <Contact />
    <Footer />
  </div>
)
