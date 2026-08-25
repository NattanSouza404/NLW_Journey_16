import { Formatador } from "../utils/Formatador";

type Props = {
    dia: string;
    setDia: (novaData: string) => void;
}

export const SelecaoDias = ({ dia, setDia }: Props) => {
  const dias = [
    "2024-02-28",
    "2024-02-29",
    "2024-03-01",
    "2024-03-02",
    "2024-03-03"
  ];
  
  return (
    <select
      name="dia"
      value={dia}
      onChange={(e) => setDia(e.target.value)}
    >
      {
        dias.map((dia, index) => {
          const formatar = Formatador(dia);

          return (
            <option key={index} value={dia}>
              {formatar.dia.numerico} de {formatar.mes}
            </option>
          )
        })
      }
    </select>
  )
}
