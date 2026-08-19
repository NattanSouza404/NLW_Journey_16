import './App.css'
import { AtividadeSalva } from './componentes/AtividadeSalva';
import { FormAdicionarAtividade } from './componentes/FormAdicionarAtividade';
import { useAtividades } from './hooks/useAtividades';

function App() {

  const {
    atividades,
    confirmarAtualizarNome,
    confirmarDelecaoAtividade,
    salvarAtividade,
    concluirAtividade
  } = useAtividades();
  
  return (
    <>
      <div id="app">
        <FormAdicionarAtividade
          onSubmit={salvarAtividade}
        />

        <main>
          <h1>Atividades</h1>
          <section>
            {
              atividades.length > 0 ? 

              atividades.map((atividade) => (
                <AtividadeSalva
                  key={atividade.id}  
                  atividade={atividade}
                  concluirAtividade={() => concluirAtividade(atividade)}
                  confirmarDelecaoAtividade={() => confirmarDelecaoAtividade(atividade.id)}
                  confirmarAtualizarNome={() => confirmarAtualizarNome(atividade)}
                />
              ))
              
              :
              
              (
                <p>Nenhuma atividade cadastrada.</p>
              )
            }
          </section>
        </main>
      </div>
    </>
  )
}

export default App
