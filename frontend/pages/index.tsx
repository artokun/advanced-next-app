import Link from 'next/link'
import { Page } from '../components/Page'

export default () => (
  <Page title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Page>
)
