import styled from "styled-components";
import axios from "axios";
import Logo from "./Logo.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";


export default function LoginPage() {
  const [emailUser, setEmailUser] = useState("");
  const [senhaUser, setSenhaUser] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useState("");
  
  function logar (resposta) {
    setUser(resposta);
    navigate("/habitos");
    console.log(user);
  };

  function FazerLogin() {
    useEffect(() => {
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
      const requisicao = axios.post(URL, {
        email: { emailUser },
        password: { senhaUser },
      });
      requisicao.then((resposta) => logar(resposta));
      
      requisicao.catch((erro) => console.log(erro.data));
    }, []);
  }

  return (
    <LoginPageLayout>
      <Logo />
      <Form onSubmit={FazerLogin}>
        <LayoutInput
          type="email"
          placeholder="email"
          value={emailUser}
          onChange={(e) => setEmailUser(e.target.value)}
          required
        />
        <LayoutInput
          type="password"
          placeholder="senha"
          value={senhaUser}
          onChange={(e) => setSenhaUser(e.target.value)}
          required
        />
        <Button>Entrar</Button>
      </Form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadatre-se!</p>{" "}
      </Link>
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const LayoutInput = styled.input`
  width: 303px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexenda Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 6px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 303px;
  height: 45px;
  background-color: #52b6ff;
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 21px;
  margin-bottom: 25px;
`;
