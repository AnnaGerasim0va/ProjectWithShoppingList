import React, { Component } from "react";
import Create from "@material-ui/icons/Create";
import { Tooltip } from "@material-ui/core";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { ButtonMainList } from "./StyledMainList";
import styled from "styled-components";

const ButtonCreateDelete = (handleClickCreate, handleClickOpenDelete) => {
  return (
    <Wrapper>
      <Tooltip placement="left" title="Изменить имя списка">
        <ButtonChange onClick={handleClickCreate}>
          <Create />
        </ButtonChange>
      </Tooltip>
      <Tooltip placement="left" title="Удалить список">
        <ButtonMainList onClick={handleClickOpenDelete}>
          <DeleteOutline />
        </ButtonMainList>
      </Tooltip>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display:flex;
justify-content:flex-end;
`;

const ButtonChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 40px;
  font-size: 30px;
  width: 30px;
  height: 30px;
  svg {
    color: teal;
  }
  :hover {
    cursor: pointer;
    svg {
      transition: all 0.4s;
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

export default ButtonCreateDelete;
