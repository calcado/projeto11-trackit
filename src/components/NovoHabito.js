import axios from "axios";
import { config, key } from "localforage";
import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../provider/auth";

export default function NovoHabito({
  setClick,
  form,
  setForm,
  clicado,
  setClicado,
  adicionou,
  setAdicionar,
}) {
  const { user } = useAuth();
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  function clicar(indice) {
    if (clicado.includes(indice)) {
      const novoClicado = clicado.filter((elemento) => {
        return elemento != indice;
      });
      setClicado(novoClicado);
    } else {
      setClicado([...clicado, indice]);
    }
  }

  function salvar() {
    const body = { ...form, days: clicado };
    console.log(body);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = { headers: { Authorization: `Bearer ${user.token}` } };
    const requisicao = axios.post(URL, body, config);
    requisicao.then((response) =>setAdicionar(!adicionou) );
    requisicao.catch((erro) => console.log(erro.response.data.message));
    setClicado("");
    setForm("");
    setClick(false);
    
  }
  return (
    <Habito>
      <Input
        type="text"
        placeholder="nome do hábito"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <DiasDaSemanas>
        {dias.map((dia, indice) => (
          <DiaBox
            type="button"
            key={indice}
            clicado={clicado}
            indice={indice}
            onClick={() => clicar(indice)}
          >
            {dia}
          </DiaBox>
        ))}
      </DiasDaSemanas>
      <Buttons>
        <Cancelar onClick={() => setClick(false)}>Cancelar</Cancelar>
        <Salvar type="submit" onClick={salvar}>
          Salvar
        </Salvar>
      </Buttons>
    </Habito>
  );
}

const Habito = styled.div`
  width: 340px;
  height: 180px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
`;
const Input = styled.input`
  height: 45px;
  width: 303px;
  font-family: "Lexenda Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  font-style: normal;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 18px;
  margin-bottom: 8px;
  color: #dbdbdb;
`;
const DiasDaSemanas = styled.div`
  display: flex;
  margin-left: 20px;
`;
const DiaBox = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.clicado.includes(props.indice) ? "#FFFFFF" : "#dbdbdb"};
  background-color: ${(props) =>
    props.clicado.includes(props.indice) ? "#CFCFCF" : "#FFFFFF"};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 25px;
  margin-right: 16px;
`;

const Cancelar = styled.div`
  height: 35px;
  width: 84px;
  background-color: #ffffff;
  color: #52b6ff;
  font-family: "Lexenda Deca", sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Salvar = styled.button`
  height: 35px;
  width: 84px;
  background-color: #52b6ff;
  color: #ffffff;
  font-family: "Lexenda Deca", sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;
