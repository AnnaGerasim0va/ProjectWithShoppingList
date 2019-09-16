import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #44d4ab;
  width: 100%;
  list-style: none;
  margin: 0px;
`;
export const HeaderButton = styled.li`
  text-decoration: none;
  :hover {
    background-color: #67ebc5;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 30px 80px;
  text-decoration: none;
  color: black;
`;
