import styled from "styled-components";
import axios from "axios";
import Logo from "./Logo.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SignPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();

  function fazerCadastro(e) {
    e.preventDefault();
    const requisicao = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: email,
        name: nome,
        image: foto,
        password: senha,
      }
    );
    requisicao.then((r) => navigate("/"));
    requisicao.catch((erro) => console.log(erro.data));
    
  }

  return (
    <LoginPageLayout>
      <Logo />
      <Form onSubmit={fazerCadastro}>
        <LayoutInput
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LayoutInput
          type="password"
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <LayoutInput
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <LayoutInput
          type="url"
          placeholder="foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          required
        />
        <Button>Cadastrar</Button>
      </Form>
      <Link to="/">
        <p>Já tem uma conta? Faça o login!</p>
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
