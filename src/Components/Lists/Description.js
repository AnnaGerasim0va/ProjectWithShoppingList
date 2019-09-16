import React, { Component } from "react";
import styled from "styled-components";

class Description extends Component {

      render(){
          const{
              product: { name, id },
              
            }=this.props;

          return(
              <ChangeBlock>
              <DescriptionBlock>{}</DescriptionBlock>
              <DescriptionBlock></DescriptionBlock>
              </ChangeBlock>
          )
      }
}

export const DescriptionBlock = styled.div`
  padding: 15px 50px;
`;

export const ChangeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Description;