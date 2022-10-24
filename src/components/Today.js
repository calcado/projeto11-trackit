import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsFillCheckSquareFill } from "react-icons/bs";
import axios from "axios";
import { useAuth } from "../provider/auth";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { usePercentual } from "../provider/percentual";

export default function Today() {
  const { user } = useAuth();
  const [rotina, setRotina] = useState([]);
  const [clicado, setClicar] = useState("");
  const [terminado, setTerminado] = useState(false);
  const diaHoje = dayjs().locale("pt-br").format("dddd, DD/MM");
  const { percentual, setTarefas, setRealizada,porcento } = usePercentual();
  
  function calculo(data) {
    let conta = 0;
    data.forEach((habito) => {
      if(habito.done){
        conta++ 
      }
    });
    setRealizada(conta)
    console.log(conta)
    
  }


  useEffect(() => {
    if (user !== undefined) {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
      const requisicao = axios.get(URL, config);
      requisicao.then((r) => {
        setTarefas(r.data.length)
        calculo(r.data);
        setRotina(r.data);
      });
      requisicao.catch((erro) => console.log(erro.data));
    }
  }, [user, terminado]);

  function feito(id, done) {
    if (!done) {
      const body = {};
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const requisicao = axios.post(URL, body, config);
      requisicao.then((r) => setTerminado(!terminado));

      requisicao.catch((erro) => console.log(erro.data));
    } else {
      const body = {};
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const requisicao = axios.post(URL, body, config);
      requisicao.then((r) => setTerminado(!terminado));
      requisicao.catch((erro) => console.log(erro.data));
    }
  }

  if (user === undefined) {
    return <div>Carregando</div>;
  }

  return (
    <TodayPage>
      <Navbar />
      <Data>
        <Hoje>{diaHoje}</Hoje>
        {porcento === 0 ? (
          <NaoFeito>Nenhum hábito concluído ainda</NaoFeito>
        ) : (
          <Percentual>{porcento}% dos hábitos concluídos</Percentual>
        )}
      </Data>
      <Atividades>
        {rotina.map((tarefa, id) => (
          <Atividade key={id}>
            <Info>
              <Titulo>{tarefa.name}</Titulo>
              <Sequencia>Sequência atual: 5 dias</Sequencia>
              <Sequencia>Seu recorde: 5 dias</Sequencia>
            </Info>
            <Icon
              onClick={() => feito(tarefa.id, tarefa.done)}
              clicado={tarefa.done}
            >
              <BsFillCheckSquareFill />
            </Icon>
          </Atividade>
        ))}
      </Atividades>

      <Footer />
    </TodayPage>
  );
}

const TodayPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Data = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 28px;
  margin-left: 33px;
`;

const Hoje = styled.span`
  color: #126ba5;
  font-family: "Lexend Deca", sans-serif;
  height: 200px;
  font-weight: 400;
  font-size: 23px;
`;

const NaoFeito = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #bababa;
`;
const Percentual = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #8fc549;
`;
const Atividades = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Atividade = styled.li`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const Titulo = styled.h1`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #666666;
  margin-bottom: 7px;
`;
const Sequencia = styled.h2`
  font-family: "Lexend Deca", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #666666;
`;
const Icon = styled.div`
  font-size: 69px;
  background-color: #ffffff;
  color: ${(props) => (props.clicado ? "#8FC549" : "#E7E7E7")};

  margin-right: 13px;
`;
