import styled from "styled-components";
import React from "react";
import { useAuth } from "../provider/auth"; 
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const {user} = useAuth();
  return (
    <Header>
      <Link to="/">
        <p>TrackIt</p>
      </Link>
      <Avatar src={user.image} alt="" />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  width: 375px;
  height: 70px;
  position: absolute;
  top: 0;
  p{
  font-family: "Playball", cursive;
  font-weight: 400;
  font-size: 39px;
  margin-left: 18px;
  color: #FFFFFF; 
  }
`;


const Avatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 100px;
  margin-right: 18px;
`;
