import { useEffect, useState } from 'react';
import './App.css'
import { AtividadeSalva } from './componentes/AtividadeSalva';
import { IconeAtividade, IconeData, IconeHora, IconeLocal } from './componentes/Icones';
import { SelecaoDias } from './componentes/SelecaoDias';
import { SelecaoHoras } from './componentes/SelecaoHoras';
import type { Atividade } from './model/Atividade';
import { adicionarAtividade, atualizarAtividade, consultarTodasAtividades, deletarAtividade } from './api/api';

function App() {

  const [atividades, setAtividades] = useState<Atividade[]>(
    []
  );

  useEffect(() => {
    const obterDados = async () => {
      const dados = await consultarTodasAtividades();

      if (dados !== undefined){
          setAtividades(dados);    
      }
        
    };

    obterDados();
  }, []);

  const salvarAtividade = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    
    if (!form){
        return;
    }
    
    const dadosFormulario = new FormData(form);

    const nome = dadosFormulario.get('atividade')?.toString();
    const dia = dadosFormulario.get('dia');
    const hora = dadosFormulario.get('hora');
    const data = `${dia} ${hora}`;

    const novaAtividade : Atividade = {
      id: 0,
      nome: nome,
      data: new Date(data),
      finalizada: false
    }

    const atividadeExiste = atividades.find((atividade) => {
      return atividade.data.getTime() == novaAtividade.data.getTime();
    });

    if (atividadeExiste){
      alert('Dia/Hora não disponível!');
      return;
    }

    try {
      const atividadeInserida = await adicionarAtividade(novaAtividade);
      setAtividades(atividades => [...atividades, atividadeInserida]);
    } catch (error){
      alert(error);
    }
    
  }

  const concluirAtividade = async (atividade:Atividade) => {
    try {
      atividade.finalizada = !atividade.finalizada;
      const atividadeAtualizada = await atualizarAtividade(atividade);

      const novasAtividades = atividades.map(a =>
      a.id === atividadeAtualizada.id
        ? { ...a, a }
        : a
      );
      setAtividades(novasAtividades);
    } catch (error){
      alert(error);
    }
    
  }

  const confirmarDelecaoAtividade = async (id: number) => {
  
      if (!confirm("Deseja deletar essa atividade?")){
          return;
      }
  
      try {
          await deletarAtividade(id);
          const novasAtividades = atividades.filter((a) => a.id != id);
          setAtividades(novasAtividades);
      } catch (error){
          alert(error);
      }
      
  }
  
  return (
    <>
      <div id="app">
            <form onSubmit={salvarAtividade} id="form-adicionar-atividade">
                <div id="place" className="card-bg">
                    <IconeLocal/>
                    Florianópolis, SC
                </div>
                <div className="fields">
                    <div className="field-wrapper">
                        <IconeAtividade/>
                        <input
                            name="atividade"
                            type="text"
                            placeholder="Qual a atividade?"
                            required
                        />
                    </div>
                    <div className="field-wrapper">
                        <IconeData/>
                        <SelecaoDias/>
                    </div>
                    <div className="field-wrapper">
                        <IconeHora/>
                        <SelecaoHoras/>
                    </div>
                </div>
                <button>Salvar atividade</button>
            </form>
            <main>
                <h1>Atividades</h1>
                <section>
                  {
                    atividades.length > 0 ? 

                    atividades.map((atividade, index) => (
                        <AtividadeSalva
                          atividade={atividade}
                          key={index}
                          concluirAtividade={() => concluirAtividade(atividade)}
                          confirmarDelecaoAtividade={() => confirmarDelecaoAtividade(atividade.id)}
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
