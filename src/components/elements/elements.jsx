import styled, { createGlobalStyle } from "styled-components"

//utils

export const GlobalStyle = createGlobalStyle`
html{
  background-color: #fef9e4;
}

body {
    color:#000000;
  }
  a{
    color:inherit;
    text-decoration:none
  }
  h3{
    margin: 0;
  }
  h1{
    margin: 0;
  }
  h2{
    margin:0;
  }
  p{
    margin: 0;
  }
  ul{
    margin:0;
    list-style:none;
  }
  li{
    margin:0;
  }
`
export const Wrapper = styled.div`
  max-width: 1080px;
  height: 100%;
  padding: 10px;
  padding-top: ${props => props.top}px;
  margin: 0 auto;
`

export const Button = styled.div`
  position: relative;
  border: ${props => (props.border === "true" ? "1px solid #1c2d5e" : "none")};

  text-align: center;
  padding: 0 4px;
  line-height: 38px;
  color: ${props => props.color};
  width: auto;
  height: 38px;
  background-color: ${props => props.bgc};
  -webkit-box-shadow: ${props =>
    props.shadow === "true" ? "5px 5px 0px 0px rgba(0, 0, 0, 0.25)" : "none"};
  -moz-box-shadow: ${props =>
    props.shadow === "true" ? "5px 5px 0px 0px rgba(0, 0, 0, 0.25)" : "none"};
  box-shadow: ${props =>
    props.shadow === "true" ? "5px 5px 0px 0px rgba(0, 0, 0, 0.25)" : "none"};
  ${({ isActive }) =>
    isActive &&
    `
      color: #ffffff;
      background: #000000;
  `}

  &:hover {
    background-color: ${props => props.activeBgc};
    color: ${props => props.activeColor};
    transform: ${props =>
      props.transform === "true" ? "translateX(5px) translateY(5px)" : "none"};
    transition: 0.1s;
    box-shadow: none;
  }
`

export const InstaButton = styled.div`
  position: relative;
  border: 1px solid #1c2d5e;
  text-align: center;
  padding: 0 4px;
  line-height: 38px;
  color: #ffffff;
  width: auto;
  height: 38px;
  background: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.25);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translateX(5px) translateY(5px);
    transition: 0.1s;
    box-shadow: none;
  }
`
