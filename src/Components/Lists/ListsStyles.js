import styled, { css } from "styled-components";

export const ListBlock = styled.div`
  padding: 10px;
  margin: 20px;
  background-color: #d4fcf1;
  display: flex;
  justify-content: space-between;
  border: 1px solid aquamarine;
  border-radius: 7px;
  box-shadow: 10px 10px 5px rgb(49, 100, 100);
`;

export const ElementLi = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #36bfa4;
  border-radius: 5px;
  background: #befae9;
  padding: 10px;
  margin: 10px;
  ${p =>
    // если приходит свойство isDone - помечаем купленным
    p.isDone &&
    css`
      p {
        text-decoration: line-through;
      }
    `}
  ::before {
    content: "✿";
  }
  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  margin: 0 10px;
`;

export const Element_ul = styled.ul`
  width: 100%;
  list-style: none;
`;

export const ButtonDelete = styled.button`
  padding: 4px 7px 5px 7px;
  background-color: #c42323;
  color: white;
  margin: 0px 10px;
  :hover {
    cursor: pointer;
    background-color: #a81919;
  }
`;

export const ButtonChange = styled.button`
  padding: 2px 4px 3px 4px;
  background-color: #4ead79;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #3d9163;
  }
`;

export const Header = styled.h2`
  text-align: center;
`;

export const InputForm = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const InputField = styled.input`
  padding: 5px 200px;
  background-color: #e8fff2;
`;
export const ChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionBlock = styled.div`
  padding:15px 50px;
`;
