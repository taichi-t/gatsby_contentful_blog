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
  padding-top: 60px;
`

const Line = styled.hr`
  border: 1px solid #bfbfbf;
`

const FooterText = styled.p`
  padding: 32px 0;
  color: #bfbfbf;
  font-size: 16px;
  font-weight: bold;
`

export default Footer
