import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.js";
import SignPage from "./SignPage.js"
export default function App() {
  return (
    <MobileLayout>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignPage/>}></Route>
        {/* <Route path="/habitos" element={}></Route>
        <Route path="/hoje" element={}></Route>
        <Route path="/historico" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </MobileLayout>
  );
}

const MobileLayout = styled.div`
  width: 375px;
  height: 667px;
`;
