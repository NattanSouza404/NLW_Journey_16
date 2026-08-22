import type { ChangeEventHandler } from "react"
import type { Atividade } from "../../model/Atividade"
import { Formatador } from "../../utils/Formatador"
import { IconeAtividadeConcluida } from "../icones/IconeAtividadeConcluida"
import { IconeAtividadeNaoConcluida } from "../icones/IconeAtividadeNaoConcluida"

import styles from './AtividadeSalva.module.css';

type Props = {
    atividade: Atividade,
    concluirAtividade: ChangeEventHandler<HTMLInputElement>,
    confirmarDelecaoAtividade: (id:number) => Promise<void>,
    confirmarAtualizarNome: (atividade:Atividade) => Promise<void>
}

export const AtividadeSalva = ( { atividade, concluirAtividade, confirmarDelecaoAtividade, confirmarAtualizarNome }: Props ) => {

    const formatar = Formatador(atividade.data);

    return (
        <div className={styles.containerAtividade}>
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
                <time className={styles.short}>
                    {formatar.dia.semana.curto}.
                    {formatar.dia.numerico} <br/>
                    {formatar.hora}
                </time>
                <time className={styles.full}>
                    {formatar.dia.semana.longo}, dia {formatar.dia.numerico} de {formatar.mes} às {formatar.hora}hs
                </time>
            </div>

            <button
                type="button"
                className={styles.btnAtividade}

                onClick={(e) => {
                    e.stopPropagation();
                    confirmarAtualizarNome(atividade);
                }}
            >
                ✏️
            </button>
            
            <button
                type="button"
                className={styles.btnAtividade}
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
