import { css } from "styled-components"

const syntaxHighlightingStyle = css`
  .gatsby-highlight {
    font-size: 1.6rem;
    margin: 0 -3.2rem;
  }

  pre[class*="language-"] {
    padding: 3rem;
    position: relative;
    margin: 0;
    padding-top: 4.8rem;
    border-radius: 0px;
    background-color: #364549;
  }

  pre[class*="language-"] code {
    font-family: "Source Code Pro", "monospace", sans-serif !important;
    color: #e3e3e3;
    text-shadow: none;
    line-height: 1.8;
  }
  .gatsby-code-title {
    color: #e3e3e3;
    position: absolute;
    background: #777;
    padding: 1rem 1rem;
    font-size: 1.6rem;
    line-height: 0.5;
    z-index: 99;
  }

  span.token.punctuation {
    color: #e3e3e3;
  }

  .language-text {
    border-radius: 0;
    text-shadow: none;
    color: #e3e3e3;
    padding: 0.2rem 0.5rem;
    background-color: #364549;
  }
`

export default syntaxHighlightingStyle
