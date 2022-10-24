import React, {useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.js";
import SignPage from "./SignPage.js";
import Habits from "./Habits.js";
import Today from "./Today.js";
import History from "./History.js";
import { AuthContext } from "../provider/auth.js";

export default function App() {
  const user = React.useContext(AuthContext)

  return (
    <MobileLayout>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignPage />}></Route>
          <Route path="/habitos" element={<Habits />}></Route>
          <Route path="/hoje" element={<Today />}></Route>
          <Route path="/historico" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </MobileLayout>
  );
}

const MobileLayout = styled.div`
  width: 375px;
  height: 667px;
`;
