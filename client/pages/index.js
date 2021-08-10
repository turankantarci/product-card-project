import Head from 'next/head';
import AppState from '../contexts/AppContext/AppState';
import { createGlobalStyle } from 'styled-components';
import ProductCardTemplate from '../components/templates/ProductCardTemplate';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  body {
    padding: .5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Home = () => {
  return (
    <AppState>
      <Head>
        <title>Product Card Project</title>
        <meta name="description" content="Product Card Project" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ProductCardTemplate />
    </AppState>
  )
}

export default Home;
