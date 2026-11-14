export interface Atividade {
    id: number
    nome: string | undefined;
    data: Date;
    finalizada: boolean
}

export interface FiltrosAtividade {
    nome: string;
}