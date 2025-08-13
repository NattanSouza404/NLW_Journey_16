import type { ChangeEventHandler } from "react"
import type { Atividade } from "../model/Atividade"
import { Formatador } from "../utils/Formatador"
import { IconeAtividadeConcluida, IconeAtividadeNaoConcluida } from "./Icones"

type Props = {
    atividade: Atividade,
    concluirAtividade: ChangeEventHandler<HTMLInputElement>,
    confirmarDelecaoAtividade: (id:number) => Promise<void>
}

export const AtividadeSalva = ( { atividade, concluirAtividade, confirmarDelecaoAtividade }: Props ) => {

    const formatar = Formatador(atividade.data);

    return (
        <div className="container-atividade">
            <div className="card-bg">
                <input
                    type="checkbox"
                    checked={atividade.finalizada}
                    value="Mon Jul 08 2024 10:00:00 GMT-0300 (Horário Padrão de Brasília)"
                    onChange={concluirAtividade}
                />
                <div>
                    <IconeAtividadeConcluida/>
                    <IconeAtividadeNaoConcluida/>
                    <span>{atividade.nome}</span>
                </div>
                <time className="short">
                    {formatar.dia.semana.curto}.
                    {formatar.dia.numerico} <br/>
                    {formatar.hora}
                </time>
                <time className="full">
                    {formatar.dia.semana.longo}, dia {formatar.dia.numerico} de {formatar.mes} às {formatar.hora}hs
                </time>
            </div>
            
            <button
                type="button"
                className="deletar-atividade"
                onClick={(e) => {
                    e.stopPropagation();
                    confirmarDelecaoAtividade(atividade.id);
                }}
            >
                x
            </button>
        </div>
    )
}
