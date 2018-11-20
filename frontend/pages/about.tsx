import Link from 'next/link'
import { Page } from '../components/Page'

export default () => (
  <Page title="About | Next.js + TypeScript Example">
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Page>
)
