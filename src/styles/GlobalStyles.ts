import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  
}



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
  background-color: var(--bg-color);
}                 

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  font-size: 1.6rem;
  
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
