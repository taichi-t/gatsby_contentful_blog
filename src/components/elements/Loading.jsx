import React from "react"
import styled, { keyframes } from "styled-components"

export const Loading = () => {
  return <LoadingText>ロードちゅう、、、</LoadingText>
}

const typing = keyframes`
  from { width: 0; } 
`

const LoadingText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  width: 10em; /* # of chars */
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 2s steps(10, end) infinite;
`

export default Loading
