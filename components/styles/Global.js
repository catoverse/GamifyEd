import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Lusitana:wght@400;700&family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');
:root {
  --white: #ffffff;
  --bg-light: #f4f4f4;
  --black: #000000;
  --bg-dark: #24181E;
  --pink: #ff238b;

  --main-font: "Lusitana", serif;
  --para-font: "Nunito Sans", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.2;
}

body {
    transition: all 0.25s linear;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
}

`;

export default GlobalStyles;
