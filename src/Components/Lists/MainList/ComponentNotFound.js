import React, { Component } from "react";
import styled from "styled-components";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

class ComponentNotFound extends Component {
  render() {
    return (
      <Wrapper>
        <SadEmoj>
          <SentimentVeryDissatisfiedIcon />
        </SadEmoj>
        <Text>Не найдено списков по вашему запросу</Text>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const SadEmoj = styled.div`
  svg {
    font-size: 50px;
    color: #7db89f;
  }
`;

const Text = styled.div`
  color: #7db89f;
  margin: 10px;
`;

export default ComponentNotFound;
