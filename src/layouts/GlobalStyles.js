import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,600&display=swap');
  body {
    font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, "Helvetica", 'Segoe UI', 'Open Sans', sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
`;

class GlobalStyles extends React.PureComponent {
  render = () => (
    <>
      <Normalize />
      <Global />
    </>
  );
}

export default GlobalStyles;
