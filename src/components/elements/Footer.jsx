import React from "react"
import styled from "styled-components"

export const Footer = () => {
  return (
    <FooterContainer>
      <Line />
      <FooterText>
        SourceCode <br /> © 2020, VAN HUNTER All rights reserved.
      </FooterText>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  text-align: center;
  padding-top: 6rem;
`

const Line = styled.hr`
  color: #bfbfbf;
`

const FooterText = styled.p`
  padding: 3.2rem 0;
  color: #bfbfbf;
  font-size: 1.6rem;
  font-weight: bold;
`

export default Footer
