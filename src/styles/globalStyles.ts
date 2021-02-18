import { createGlobalStyle } from 'styled-components'

import { COLORS, MEASURE, BORDER, SCALE } from './variables'

export const GlobalStyles = createGlobalStyle`

  :root {  
    background-color: ${COLORS.light};
    font-family: sans-serif;
    font-size: calc(1rem + 0.4vw); 
    scroll-padding: ${SCALE.s2} 0 0 ${SCALE.s2};
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/grit-fs8.png);

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important
      }
    }
  }

  :-moz-focusring {
    outline: ${COLORS.dark} medium dashed;
    outline-offset: ${SCALE['s-3']};

      &[type="button"], 
      &[type="reset"], 
      &[type="submit"], 
      button {
        outline: ${COLORS.dark} medium dashed;
        outline-offset: ${SCALE['s-3']};
    }
  }

  }
  * {
    box-sizing: border-box;
    max-width: ${MEASURE};
  }
  
  html,body,div,header,nav,main,footer {
    max-width: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: Helvetica, sans-serif;
  }

  h1 {
    font-size: 1.25em;
  }

  img {
    max-width: 100%;
  }

  button,
  input[type=submit] {
    background-color: inherit;
    border-color: inherit;
    border: ${BORDER.thick} solid;
    cursor: pointer;
    padding: ${SCALE['s-1']};

    &:disabled {
      cursor: not-allowed;
    }
  }

  a {
    color: ${COLORS.dark};
  }

  main {
    background-color: ${COLORS.lightish};
    background-image:  url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/49914/veneer-birch-texture-fs8.png');
    min-height: 100vh;
    padding: ${SCALE.s2};
  }

  .hidden,
  [hidden] {
    display: none;
  }

  #scroll-pixel {
    position: absolute;
    width: 1px;
    height: 1px;
    top: 50px;
    left: 0;
    pointer-events: none;
  }
`
