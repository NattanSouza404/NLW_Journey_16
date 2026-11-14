import { useEffect, useState } from "react";
import {
  adicionarAtividade,
  atualizarAtividade,
  atualizarFinalizacaoAtividade,
  consultarTodasAtividades,
  deletarAtividade,
} from "../services/AtividadeService";
import type { Atividade, FiltrosAtividade } from "../model/Atividade";

export const useAtividades = () => {
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [filtros, setFiltros] = useState<FiltrosAtividade>(
    { nome: ""}
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      const dados = await consultarTodasAtividades(filtros);
      
      if (dados !== undefined) {
        setAtividades(dados);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filtros]);

  const salvarAtividade = async (nome: string, data: string) => {
    const novaAtividade: Atividade = {
      id: 0,
      nome: nome,
      data: new Date(data),
      finalizada: false,
    };

    const atividadeExiste = atividades.find((atividade) => {
      return atividade.data.getTime() == novaAtividade.data.getTime();
    });

    if (atividadeExiste) {
      alert("Dia/Hora não disponível!");
      return;
    }

    try {
      const atividadeInserida = await adicionarAtividade(novaAtividade);
      setAtividades((atividades) => [...atividades, atividadeInserida]);
    } catch (error) {
      alert(error);
    }
  };

  const concluirAtividade = async (id: number) => {
    try {
      await atualizarFinalizacaoAtividade(id);

      const novasAtividades = atividades.map((a) =>
        a.id === id ? { ...a, finalizada: !a.finalizada } : a,
      );

      setAtividades(novasAtividades);
    } catch (error) {
      alert(error);
    }
  };

  const confirmarAtualizarNome = async (atividade: Atividade) => {
    try {
      const novoNome = prompt(
        `Mudar nome de atividade ${atividade.nome} para:`,
        atividade.nome,
      );

      if (novoNome === null || novoNome.length === 0) {
        return;
      }

      atividade.nome = novoNome;

      await atualizarAtividade(atividade);

      const novasAtividades = atividades.map((a) =>
        a.id === atividade.id ? { ...a, a } : a,
      );
      setAtividades(novasAtividades);
    } catch (error) {
      alert(error);
    }
  };

  const confirmarDelecaoAtividade = async (id: number) => {
    if (!confirm("Deseja deletar essa atividade?")) {
      return;
    }

    try {
      await deletarAtividade(id);
      const novasAtividades = atividades.filter((a) => a.id != id);
      setAtividades(novasAtividades);
    } catch (error) {
      alert(error);
    }
  };

  return {
    atividades,
    filtros,
    setFiltros,
    confirmarAtualizarNome,
    confirmarDelecaoAtividade,
    salvarAtividade,
    concluirAtividade
  };
};
