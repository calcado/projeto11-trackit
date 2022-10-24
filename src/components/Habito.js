import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { useAuth } from "../provider/auth";
import axios from "axios";

export default function HabitoLista({ habito, setClick, deletou, setDeletar }) {
  const { user } = useAuth();
  const { id, name, days } = habito;
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  function deletar() {
    const confirma = window.confirm("Tem certeza?");
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
      data: { id: id },
    };
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

    if (confirma) {
      const requisicao = axios.delete(URL, config);
      requisicao.then(() => setDeletar(!deletou));
      requisicao.catch((erro) => console.log(erro.response.data.message));
    }
  }

  return (
    <Habito>
      <NomeHabito>{name}</NomeHabito>
      <DiasDaSemanas>
        {dias.map((dia, indice) => (
          <DiaBox key={indice} elemento={days} indice={indice}>
            {dia}{" "}
          </DiaBox>
        ))}
      </DiasDaSemanas>
      <Icon onClick={deletar}>
        <BsTrash />
      </Icon>
    </Habito>
  );
}

const Habito = styled.div`
  height: 94px;
  width: 340px;
  background-color: #ffffff;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
const NomeHabito = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #666666;
  margin-left: 20px;
  margin-bottom:8px;
`;
const Icon = styled.div`
  font-size: 15px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  top: 0;
  margin-top: 10px;
`;
const DiasDaSemanas = styled.div`
  display: flex;
  margin-left: 20px;
`;
const DiaBox = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.elemento.includes(props.indice) ? "#FFFFFF" : "#dbdbdb"};
  background-color: ${(props) =>
    props.elemento.includes(props.indice) ? "#CFCFCF" : "#FFFFFF"};
`;
