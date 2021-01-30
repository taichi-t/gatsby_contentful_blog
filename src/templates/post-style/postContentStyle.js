import { css } from "styled-components"
import media from "styled-media-query"
import { breakPoints } from "../../components/elements/elements"

const postContentStyle = css`
  line-height: 1.9;
  font-size: 2rem;
  ${media.lessThan(breakPoints["xsmall"])`
    font-size:1.6rem;
  `}
  h2 {
    font-size: 3rem;
    margin: 4.8rem 0 2.4rem 0;
    border-bottom: solid 1px #bbc0cf;
    ${media.lessThan(breakPoints["xsmall"])`
    font-size:2.4rem;
  `}
  }
  h3 {
    font-size: 2.8rem;
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
    margin-top: 2.4rem;
    margin-bottom: 1rem;
  }

  blockquote {
    word-break: break-word;
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
  img + em {
    text-align: center;
    color: #777777;
    font-size:1.6rem;
    display:flex;
    justify-content:center
  }
  .emoji-icon {
    border: none;
    display: inline-block;
    margin-top: 0;
    width: 2.4rem;
    vertical-align: middle;
  }
  ol {
    padding-left: 1em;
    margin: 2rem 0 1rem 0;
  }
  ul {
    list-style: outside;
    padding-left: 1em;
    margin: 2rem 0 1rem 0;
  }
  li {
    margin: 2rem 0 1rem 0;
  }
`

export default postContentStyle
