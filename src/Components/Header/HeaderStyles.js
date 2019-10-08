import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Block = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.ul`
  position: fixed;
  z-index: 1;
  top: 0;
  height: 100px;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44d4ab;
  width: 100%;
  list-style: none;
  margin: 0px;
`;
export const HeaderButton = styled.li`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  ${p =>
    p.isActive &&
    css`
      background-color: #67ebc5;
    `}
  :hover {
    background-color: #67ebc5;
  }
  /* ${p =>
    p.isActive &&
    css`
       {
        background-color: #67ebc5;
      }
    `} */
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 30px 80px;
  text-decoration: none;
  font-family: 'Permanent Marker', cursive;
  font-size: 15px;
  color: black;
`;
