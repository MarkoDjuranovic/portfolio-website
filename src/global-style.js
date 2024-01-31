import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Add your selected Google Font link here */
  @import url('https://fonts.googleapis.com/css?family=Lato:300|PT+Serif:700');

  body {
    font-family: 'Lato', sans-serif;
    margin: 0; /* Reset margin to eliminate default body margin */
  }

  /* Add other global styles here if needed */
  h2 {
    font-family: 'Lato', sans-serif;
    margin: 0; /* Reset margin to eliminate default body margin */
    font-weight:bold;!important
  }
`;

export default GlobalStyle;