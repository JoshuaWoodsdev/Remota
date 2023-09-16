import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
  2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
  3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }

  /*
  4. Add accessible line-height
  5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: Helvetica, Arial, sans-serif; /* Set the main font */
  }

  /*
  6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
  7. Apply your color theme
  */
  body {
    background-color: #f0; /* Set your background color */
    color: #333; /* Set your text color */
  }

  /*
  8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /*
  9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
