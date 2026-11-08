import type { FiltrosAtividade } from "../../model/Atividade";
import { InputWrapper } from "../ui/InputWrapper/InputWrapper";
import styles from "./Header.module.css";

type Props = {
    filtros: FiltrosAtividade;
    setFiltros: (filtros: FiltrosAtividade) => void;
}

export const Header = ({ filtros, setFiltros }: Props) => {

  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Atividades</h1>
      <InputWrapper size="small">
        <input
            value={filtros.nome}
            placeholder="Digite o nome da atividade"
            onChange={(e) => setFiltros({
                ...filtros,
                nome: e.target.value
            })}
        />
      </InputWrapper>
    </header>
  );
};
