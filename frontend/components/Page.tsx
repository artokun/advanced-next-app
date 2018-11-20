import * as React from 'react'
import { Header } from './Header'

interface IProps {
  title?: string
}

const Page: React.SFC<IProps> = ({ children, title }) => (
  <main>
    <Header title={title} />
    {children}
  </main>
)

export { Page }
