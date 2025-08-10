import type { Atividade } from "../model/Atividade";

const PATH = "http://localhost:5093/api/Atividade";

export const consultarTodasAtividades = async () => {
    const resposta = await fetch(PATH);

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

    const resposta = await fetch(PATH, option);

    if (resposta.status !== 201) {
        const objeto = await resposta.json()
        throw new Error(objeto);
    }

    return atividade;
}