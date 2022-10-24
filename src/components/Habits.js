import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import NovoHabito from "./NovoHabito.js";
import { useAuth } from "../provider/auth.js";
import HabitoLista from "./Habito.js";

export default function Habits() {
  const [form, setForm] = useState({ name: "", days: "" });
  const [clicado, setClicado] = useState([]);
  const [click, setClick] = useState(false);
  const [adicionou, setAdicionar] = useState(false);
  const [deletou, setDeletar]= useState(false);
  const { user } = useAuth();
  const [habitos, setHabitos] = useState([]);
  const texto ="Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para começar a trackear!";
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    if (user !== undefined) {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
      const requisicao = axios.get(URL, config);
      requisicao.then((r) => setHabitos(r.data));
      requisicao.catch((erro) => console.log(erro.data));
    }
  }, [user,deletou,adicionou]);

  if (user === undefined) {
    return <div>Carregando</div>;
  }

  return (
    <HabitPage>
      <Navbar />
      <CaixaTopo>
        <Titulo>Meus hábitos</Titulo>
        <Criar onClick={() => setClick(true)}>+</Criar>
      </CaixaTopo>
      {click && (
        <NovoHabito
          setClick={setClick}
          form={form}
          setForm={setForm}
          clicado={clicado}
          setClicado={setClicado}
          adicionou={adicionou}
          setAdicionar={setAdicionar}
        />
      )}
      {habitos.lenght === 0 ? (
        <Span>{texto}</Span>
      ) : (
        <Lista>
          {habitos.map((habito, id) => (
            <HabitoLista key={id} habito={habito}
             setDeletar={setDeletar} 
             deletou={deletou}/>
          ))}
        </Lista>
      )}

      <Footer />
    </HabitPage>
  );
}
const Lista = styled.div`
overflow-y: auto;
max-height: 420px;


`

const HabitPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  position: relative;
  
`;
const Titulo = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 23px;
  font-weight: 400;
  color: #126ba5;
  
`;

const CaixaTopo = styled.div`
  margin-top: 92px;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Criar = styled.button`
  background-color: #52b6ff;
  color: #ffffff;
  height: 35px;
  width: 40px;
  font-size: 20px;
`;

const Span = styled.span`
  width: 338px;
  height: 74px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #666666;
`;

