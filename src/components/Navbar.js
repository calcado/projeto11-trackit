import styled from "styled-components";
import React from "react";

export default function Navbar() {
  return (
    <Header>
      <Logo>TrackIt</Logo>
      <Avatar src="" alt="" />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
`;
const Logo = styled.p`
  font-family: "Playball", cursive;
  font-weight: 400;
  font-size: 39px;
  margin-left: 18px;
`;

const Avatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 100px;
  margin-right: 18px;
`;
