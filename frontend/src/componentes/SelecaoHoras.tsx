import type { ReactElement } from "react";

type Props = {
    hora: string;
    setHora: (novaHora: string) => void;
}

export const SelecaoHoras = ({ hora, setHora }: Props) => {
  const opcoesHorasDisponiveis:ReactElement[] = [];

  let contagem = 0;
  for (let i = 6; i < 23; i++){
    const hora = String(i).padStart(2, '0');
    let stringFormatada = `${hora}:00`;

    opcoesHorasDisponiveis.push(
      <option key={contagem++}value={stringFormatada}>
        {stringFormatada}
      </option>
    );

    stringFormatada = `${hora}:30`;

    opcoesHorasDisponiveis.push(
      <option key={contagem++} value={stringFormatada}>
        {stringFormatada}
      </option>
    );
  }
  
  return (
    <select
      name='hora'
      value={hora}
      onChange={(e) => setHora(e.target.value)}
    >
      { opcoesHorasDisponiveis }
    </select>
  );
}