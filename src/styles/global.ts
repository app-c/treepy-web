import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

const { color } = theme

export const GlobalStyle = createGlobalStyle`

    * {

        margin: 0;

        padding: 0;

        box-sizing: border-box;

    }



    :focus {

        outline: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {

        color: #878787;

        background-color: #fff;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    h1 {
      font-size: calc(12px + 2.5vw);
      font-weight: 900;
    }

    h2 {
      font-size: calc(12px + 2vw);
      font-weight: 800;
    }
    h3 {
      font-size: calc(1rem + .7vw);
      font-weight: 600;
    }

    h4 {
      font-size: calc(1rem + .5vw);
      font-weight: 500;
    }

    p {
      font-size: calc(.5rem + .7vw)
    }



    body, input, textarea, button {

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;


    }

    button {
      cursor: pointer;
      border-radius: 5px;
      padding: 5px 15px;
      width: calc(60px + 5vw);

    }

`
