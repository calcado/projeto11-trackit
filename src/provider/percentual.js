import { useState, createContext, useContext, useEffect } from "react";

const PercentualContext = createContext({});

export const PercentualProvider = (props) => {
  const [percentual, setPercentual] = useState(undefined);
  const [tarefas, setTarefas] = useState(undefined);
  const [realizada, setRealizada] = useState(undefined);

  const porcento = parseInt(((realizada/tarefas)*100).toFixed(2))

  useEffect(() => {
    const percentualStorage = localStorage.getItem("percentual");
    if (percentualStorage) {
      setPercentual(JSON.parse(percentualStorage));
    } else {
      setPercentual(undefined);
    }
  }, []);

  return (
    <PercentualContext.Provider value={{percentual, setPercentual,tarefas, setTarefas,realizada, setRealizada,porcento}}>
      {props.children}
    </PercentualContext.Provider>
  );
};

export const usePercentual = () => useContext(PercentualContext);
