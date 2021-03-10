import { FC } from 'react'
import { Header } from 'components'

export const MainLayout: FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)
