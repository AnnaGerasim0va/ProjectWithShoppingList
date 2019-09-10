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

export const Element_li = styled.li`
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

export const Button = styled.button`
  padding: 3px 4px 4px 4px;
  background-color: #c42323;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #a81919;
  }
`;

// .element:hover{
//     cursor: pointer;
//     text-decoration: line-through;
// }

// button {
//     margin: 0px 10px;
// }

// h2 {
//     text-align: center;
// }

// .nameOfList {
//     width: 300px;
// }
