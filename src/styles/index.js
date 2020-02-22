import React from "react";

import { css, Global } from "@emotion/core";

export const IndexCSS = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: "Amaranth", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
      }
    `}
  />
);

export default IndexCSS;
