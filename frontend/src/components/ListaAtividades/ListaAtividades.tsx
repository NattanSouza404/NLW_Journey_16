import type { Atividade } from "../../model/Atividade";
import { AtividadeSalva } from "../AtividadeSalva/AtividadeSalva";
import styles from './ListaAtividades.module.css';

type Props = {
  atividades: Atividade[];
  concluirAtividade: (atividade: Atividade) => void;
  confirmarDelecaoAtividade: (id: number) => Promise<void>;
  confirmarAtualizarNome: (atividade: Atividade) => Promise<void>;
};

export const ListaAtividades = ({
  atividades,
  concluirAtividade,
  confirmarDelecaoAtividade,
  confirmarAtualizarNome,
}: Props) => {
  if (atividades.length === 0) {
    return (
      <section className={styles.lista}>
        <p>Nenhuma atividade cadastrada.</p>
      </section>
    );
  }

  return (
    <section className={styles.lista}>
      {atividades.map((atividade) => (
        <AtividadeSalva
          key={atividade.id}
          atividade={atividade}
          concluirAtividade={() => concluirAtividade(atividade)}
          confirmarDelecaoAtividade={() =>
            confirmarDelecaoAtividade(atividade.id)
          }
          confirmarAtualizarNome={() => confirmarAtualizarNome(atividade)}
        />
      ))}
    </section>
  );
};
