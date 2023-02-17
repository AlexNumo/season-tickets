import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --main-text-color: #212121;
  --secondary-text-color: #9B9FAA;
  --white: #ffffff;
  --blue-txt-color: #264061;
  --accent-color: #FC842D;
  --accent-shadow: rgba(252, 132, 45, 0.5);
  --secondary-background-color: #F0F1F3;
  --border-color: #e0e0e0;
  --timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --trans-duration: 250ms;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-height: 100%;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 400;
  font-style: normal;  
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
}

body,
h1,
h2,
h3,
h4,
p,
ul,
li
 {
  margin: 0;
}

ul,
ol{
    padding: 0px;
    margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

input,
button {
  font: inherit;
  background-color: inherit;
  padding: 0;
  margin: 0;
}

.hidden{
  visibility: hidden;
  width: 0px;
  height: 0px;
}

/* .anime{ */

  /* animation: heartbeat 0,8s infinite; */
  /* animation: identifier 0.8s infinite;
} */

/* @keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
} */
`;

export default GlobalStyle;
