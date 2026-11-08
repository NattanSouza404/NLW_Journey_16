import { api } from "../api/api";
import type { Atividade, FiltrosAtividade } from "../model/Atividade";

export const consultarTodasAtividades = async (filtros?: FiltrosAtividade) => {
  const resposta = await api.get<Atividade[]>("/atividade", {
    params: filtros,
  });

  if (resposta.status !== 200) {
    throw new Error("Erro ao consultar atividades.");
  }

  const atividades = resposta.data;

  atividades.forEach((a) => {
    a.data = new Date(a.data);
  });

  return atividades;
};

export const adicionarAtividade = async (atividade: Atividade) => {
  const resposta = await api.post<Atividade>("/atividade", atividade);

  if (resposta.status !== 201) {
    throw new Error("Erro ao adicionar atividade.");
  }

  return resposta.data;
};

export const atualizarAtividade = async (atividade: Atividade) => {
  const resposta = await api.put(`/atividade/${atividade.id}`, atividade);

  if (resposta.status !== 204) {
    throw new Error("Erro ao atualizar atividade.");
  }
};

export const atualizarFinalizacaoAtividade = async (id: number) => {
  const resposta = await api.put(`/atividade/${id}/finalizacao`);

  if (resposta.status !== 204) {
    throw new Error("Erro ao atualizar atividade.");
  }
};

export const deletarAtividade = async (id: number) => {
  const resposta = await api.delete(`/atividade/${id}`);

  if (resposta.status !== 204) {
    throw new Error("Erro ao deletar atividade");
  }
};