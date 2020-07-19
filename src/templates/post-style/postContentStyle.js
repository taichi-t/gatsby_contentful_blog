import { css } from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "../../components/elements/elements"

const postContentStyle = css`
  line-height: 1.9;
  h1 {
    font-size: 3rem;
    margin: 5.6rem 0 2.4rem 0;
    border-bottom: solid 1px #bbc0cf;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:2.8rem;
  `}
  }
  h2 {
    font-size: 2.8rem;
    margin: 4.8rem 0 2.4rem 0;
    border-bottom: solid 1px #bbc0cf;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:2.4rem;
  `}
  }
  h3 {
    font-size: 2.4rem;
    margin: 4rem 0 2.4rem 0;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:2rem;
  `}
  }
  a {
    color: #1c2d5e;
    text-decoration: underline;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    font-size: 1.6rem;
    margin-top: 2.4rem;
    margin-bottom: 1rem;
  }
  strong {
    font-size: 1.6rem;
    margin-top: 2.4rem;
    font-weight: 600;
  }
  blockquote {
    margin: 0;
    padding: 0 1.45rem;
    color: #777777;
    border-left: 5px solid #ddd;
  }
  img {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    border: 1px solid #bbc0cf;
  }
  ol {
    padding-left: 1em;
  }
  ul {
    list-style: outside;
    padding-left: 1em;
  }
  li {
    font-size: 1.6rem;
  }
`

export default postContentStyle
