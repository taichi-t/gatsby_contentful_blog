import { css } from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "../../components/elements/elements"

const postContentStyle = css`
  line-height: 1.9;
  h1 {
    line-height: 1.9;
    font-size: 4.8rem;
    margin: 5.6rem 0 2.4rem 0;
    border-bottom: solid 1px #bbc0cf;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:3.2rem;
  `}
  }
  h2 {
    line-height: 1.9;
    font-size: 4rem;
    margin: 4.8rem 0 2.4rem 0;
    border-bottom: solid 1px #bbc0cf;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:3rem;
  `}
  }
  h3 {
    line-height: 1.9;
    font-size: 3.2rem;
    margin: 4rem 0 2.4rem 0;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:2.6rem;
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
    font-weight: 200;
    margin: 2.4rem 0;
  }
  strong {
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
  }
`

export default postContentStyle
