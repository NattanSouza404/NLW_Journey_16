import { useEffect, useState } from 'react';
import './App.css'
import { AtividadeSalva } from './componentes/AtividadeSalva';
import { IconeAtividade, IconeData, IconeHora, IconeLocal } from './componentes/Icones';
import { SelecaoDias } from './componentes/SelecaoDias';
import { SelecaoHoras } from './componentes/SelecaoHoras';
import type { Atividade } from './model/Atividade';
import { consultarTodos } from './api/mock_api/mock_api';

let id = 4;

function App() {

  const [atividades, setAtividades] = useState<Atividade[]>(
    []
  );

  useEffect(() => {
    const obterDados = async () => {
      const dados = await consultarTodos();

      if (dados !== undefined){
          setAtividades(dados);    
      }
        
    };

    obterDados();
  }, []);

  const salvarAtividade = (event:React.FormEvent<HTMLFormElement>) => {
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

    const novaAtividade: Atividade = {
      id: id++,
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

    setAtividades(atividades => [...atividades, novaAtividade]);
  }

  const concluirAtividade = (atividade:Atividade) => {
    const novasAtividades = atividades.map(a =>
    a.id === atividade.id
      ? { ...a, finalizada: !a.finalizada }
      : a
    );
    setAtividades(novasAtividades);
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
