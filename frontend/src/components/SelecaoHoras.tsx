type Props = {
  hora: string;
  setHora: (novaHora: string) => void;
}

const OPCOES_HORAS_DISPONIVEIS: string[] = gerarHorariosDisponiveis();

export const SelecaoHoras = ({ hora, setHora }: Props) => {
  return (
    <select
      name='hora'
      value={hora}
      onChange={(e) => setHora(e.target.value)}
    >
      {OPCOES_HORAS_DISPONIVEIS.map((opcao) => 
        <option
          key={opcao}
          value={opcao}
        >
          {opcao}
        </option>
      )}
    </select>
  );
}

function gerarHorariosDisponiveis(): string[] {
  const opcoesHorasDisponiveis: string[] = [];

  for (let hora = 6; hora < 23; hora++) {
    const horaFormatada = String(hora).padStart(2, '0');

    for (const minuto of ['00', '30']) {
      opcoesHorasDisponiveis.push(
        `${horaFormatada}:${minuto}`
      );
    }
  }

  return opcoesHorasDisponiveis;
}
