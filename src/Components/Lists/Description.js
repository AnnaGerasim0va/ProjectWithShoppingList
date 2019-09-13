import React, { Component } from "react";
import {
    ChangeBlock,
    DescriptionBlock
  } from "./ListsStyles";

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

export default Description;