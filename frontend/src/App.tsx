import { FormAdicionarAtividade } from "./components/FormAdicionarAtividade/FormAdicionarAtividade";
import { ListaAtividades } from "./components/ListaAtividades/ListaAtividades";
import { useAtividades } from "./hooks/useAtividades";

import styles from "./App.module.css";
import { Header } from "./components/Header/Header";

function App() {
  const {
    atividades,
    confirmarAtualizarNome,
    confirmarDelecaoAtividade,
    salvarAtividade,
    concluirAtividade,
  } = useAtividades();

  return (
    <div id={styles.app}>
      <FormAdicionarAtividade onSubmit={salvarAtividade} />

      <main className={styles.main}>
        <Header />
        <ListaAtividades
          atividades={atividades}
          concluirAtividade={concluirAtividade}
          confirmarDelecaoAtividade={confirmarDelecaoAtividade}
          confirmarAtualizarNome={confirmarAtualizarNome}
        />
      </main>
    </div>
  );
}

export default App;
