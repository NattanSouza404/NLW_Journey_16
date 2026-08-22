import { FormAdicionarAtividade } from "./componentes/FormAdicionarAtividade/FormAdicionarAtividade";
import { ListaAtividades } from "./componentes/ListaAtividades/ListaAtividades";
import { useAtividades } from "./hooks/useAtividades";

import styles from "./App.module.css";

function App() {
  const {
    atividades,
    confirmarAtualizarNome,
    confirmarDelecaoAtividade,
    salvarAtividade,
    concluirAtividade,
  } = useAtividades();

  return (
    <>
      <div id={styles.app}>
        <FormAdicionarAtividade onSubmit={salvarAtividade} />

        <main className={styles.main}>
          <h1 className={styles.titulo}>Atividades</h1>
          <ListaAtividades
            atividades={atividades}
            concluirAtividade={concluirAtividade}
            confirmarDelecaoAtividade={confirmarDelecaoAtividade}
            confirmarAtualizarNome={confirmarAtualizarNome}
          />
        </main>
      </div>
    </>
  );
}

export default App;
