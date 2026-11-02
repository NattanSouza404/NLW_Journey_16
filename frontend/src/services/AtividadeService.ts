import { api } from "../api/api";
import type { Atividade } from "../model/Atividade";


export const consultarTodasAtividades = async () => {
    const resposta = await api.fetch("atividade");

    if (resposta.status !== 200){
        throw new Error("Erro ao consultar atividades.");
    }

    const atividades : Atividade[] = await resposta.json();

    atividades.forEach(a => {
        a.data = new Date(a.data);
    });

    return atividades;
}

export const adicionarAtividade = async (atividade: Atividade) => {
    const option = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(atividade)
    }

    const resposta = await api.fetch("atividade", option);

    if (resposta.status !== 201) {
        throw new Error("Erro ao adicionar atividade.");
    }

    return resposta.json();
}

export const atualizarAtividade = async (atividade: Atividade) => {
    const option = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(atividade)
    }

    const resposta = await api.fetch(`atividade/${atividade.id}`, option);

    if (resposta.status !== 204) {
        throw new Error("Erro ao atualizar atividade.");
    }
}

export const atualizarFinalizacaoAtividade = async (id: number) => {
    const option = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'}
    }

    const resposta = await api.fetch(`atividade/${id}/finalizacao`, option);

    if (resposta.status !== 204) {
        throw new Error("Erro ao atualizar atividade.");
    }
}

export const deletarAtividade = async (id: number) => {
    const option = {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'},
    }

    const resposta = await api.fetch(`atividade/${id}`, option);

    if (resposta.status !== 204) {
        throw new Error("Erro ao deletar atividade");
    }
}