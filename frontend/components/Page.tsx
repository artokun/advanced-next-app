import * as React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Header } from './Header'
import { Meta } from './Meta'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  containerWidth: '1300px'
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`

interface IProps {
  title?: string
}

const Page: React.SFC<IProps> = ({
  children,
  title = 'AdvNextApp',
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <>
      <StyledPage {...props}>
        <Meta title={title} />
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

const StyledPage = styled.main`
  background: white;
  color: ${props => props.theme.black};
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

export { Page }
