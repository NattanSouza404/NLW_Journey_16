export const consultarTodasAtividades = async () => {
    const resposta = await fetch("http://localhost:5093/api/Atividade");

    if (resposta.status !== 200){
        throw new Error("Erro ao consultar atividades.");
    }

    return await resposta.json();
}