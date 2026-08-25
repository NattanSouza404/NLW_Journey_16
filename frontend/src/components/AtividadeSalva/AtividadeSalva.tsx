import type { ChangeEventHandler } from "react"
import type { Atividade } from "../../model/Atividade"
import { Formatador, type FormatoData } from "../../utils/Formatador"

import styles from './AtividadeSalva.module.css';
import { Card } from "../ui/Card/Card"
import { IconeStatusAtividade } from "../ui/icons/IconeStatusAtividade"
import { Button } from "../ui/Button/Button";

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
            <Card className={styles.cardAtividade}>
                <input
                    className={styles.checkBoxInput}
                    type="checkbox"
                    checked={atividade.finalizada}
                    onChange={concluirAtividade}
                />
                <div className={styles.subSecao}>
                    <IconeStatusAtividade finalizada={atividade.finalizada}/>
                    <span>{atividade.nome}</span>
                </div>
                <DataExibicao formatar={formatar}/>
            </Card>

            <Button
                className={styles.btnAtividade}
                onClick={(e) => {
                    e.stopPropagation();
                    confirmarAtualizarNome(atividade);
                }}
            >
                ✏️
            </Button>

            <Button
                className={styles.btnAtividade}
                onClick={(e) => {
                    e.stopPropagation();
                    confirmarDelecaoAtividade(atividade.id);
                }}
            >
                x
            </Button>
        </div>
    )
}

const DataExibicao = ( { formatar }: { formatar: FormatoData }) => {
    return (
        <>
            <time className={styles.short}>
                {formatar.dia.semana.curto}.
                {formatar.dia.numerico} <br/>
                {formatar.hora}
            </time>
            <time className={styles.full}>
                {formatar.dia.semana.longo}, dia {formatar.dia.numerico} de {formatar.mes} às {formatar.hora}hs
            </time>
        </>
    )
}