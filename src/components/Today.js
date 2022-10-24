import styled from "styled-components";
import React from "react";

export default function Today(){
    
    return(
        <TodayPage></TodayPage>
    )
}

const TodayPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;