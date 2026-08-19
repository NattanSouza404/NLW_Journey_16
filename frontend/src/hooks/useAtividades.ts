import { useEffect, useState } from "react";
import {
  adicionarAtividade,
  atualizarAtividade,
  consultarTodasAtividades,
  deletarAtividade,
} from "../api/api";
import type { Atividade } from "../model/Atividade";

export const useAtividades = () => {
  const [atividades, setAtividades] = useState<Atividade[]>([]);

  useEffect(() => {
    const obterDados = async () => {
      const dados = await consultarTodasAtividades();

      if (dados !== undefined) {
        setAtividades(dados);
      }
    };

    obterDados();
  }, []);

  const salvarAtividade = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    if (!form) {
      return;
    }

    const dadosFormulario = new FormData(form);

    const nome = dadosFormulario.get("atividade")?.toString();
    const dia = dadosFormulario.get("dia");
    const hora = dadosFormulario.get("hora");
    const data = `${dia} ${hora}`;

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

  const concluirAtividade = async (atividade: Atividade) => {
    try {
      atividade.finalizada = !atividade.finalizada;
      const atividadeAtualizada = await atualizarAtividade(atividade);

      const novasAtividades = atividades.map((a) =>
        a.id === atividadeAtualizada.id ? { ...a, a } : a,
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

      const atividadeAtualizada = await atualizarAtividade(atividade);

      const novasAtividades = atividades.map((a) =>
        a.id === atividadeAtualizada.id ? { ...a, a } : a,
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
    confirmarAtualizarNome,
    confirmarDelecaoAtividade,
    salvarAtividade,
    concluirAtividade
};
};
