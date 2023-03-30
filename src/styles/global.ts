import { createGlobalStyle } from 'styled-components'
import { color } from './colors'

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

        background-color: #ffffff;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    h1 {
      font-size: clamp(20px, 2.5vw, 3vw);
      font-weight: 900;
      color: ${color.green[30]};
    }

    h2 {
      font-size: clamp(20px, 2vw, 3vw);
      color: ${color.green[30]};
      font-weight: 800;
    }
    h3 {
      font-size: calc(1rem + .7vw);
      color: ${color.green[30]};
      font-weight: 600;
    }

    h4 {
      font-size: calc(1rem + .5vw);
      color: ${color.green[30]};
      font-weight: 500;
    }

    p {
      font-size: clamp(16px, 1vw, 2vw);
      /* font-size: calc(.5rem + .7vw); */
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
      padding: calc(2px .5vw) calc(5px + .5vw)

    }

`
