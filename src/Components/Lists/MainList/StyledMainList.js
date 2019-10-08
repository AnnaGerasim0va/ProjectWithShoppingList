import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

export const StyledDiv = styled.div`
  margin-top: 10%;
`;

export const StyledLink = styled(Link)`
  /* display: inline-block; */
  padding: 3px 700px 3px 15px;
  text-decoration: none;
  color: black;
`;

export const Header = styled.h2`
  text-align: center;
`;

export const ButtonDeleteDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 10px;
  font-size: 30px;
  width: 30px;
  height: 30px;
  svg {
    color: teal;
  }
  :hover {
    cursor: pointer;
    svg {
      transform: ${({ disableRotate }) =>
        disableRotate ? "none" : "rotate(90deg)"};
      transition: all 0.4s;
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  transform: ${({ isExpandedForAdd }) =>
    isExpandedForAdd ? "rotate(45deg)" : "none"};
  transition: all 0.7s;
  :hover {
    transition: all 0.7s;
    background-color: #d1d1d1;
    opacity: 0.8;
    cursor: pointer;
    svg {
      font-size: 60px;
    }
  }
  svg {
    font-size: 50px;
    color: teal;
  }
`;

export const ListBlock = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: #d4fcf1;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  box-shadow: 6px 6px 10px rgb(49, 100, 100);
`;

export const InputSearch = styled(TextField)`
  width: 95%;
  margin-left: 50%;
`;
