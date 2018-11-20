import * as React from 'react'
import Head from 'next/head'

interface IProps {
  title?: string
}

const Meta: React.SFC<IProps> = ({ title }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>{title}</title>
  </Head>
)

export { Meta }
