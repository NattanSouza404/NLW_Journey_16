import { useState } from "react";
import { IconeAtividade } from "../ui/icons/IconeAtividade";
import { IconeData } from "../ui/icons/IconeData";
import { IconeHora } from "../ui/icons/IconeHora";
import { IconeLocal } from "../ui/icons/IconeLocal";
import { SelecaoDias } from "../SelecaoDias";
import { SelecaoHoras } from "../SelecaoHoras";

import styles from './FormAdicionarAtividade.module.css';
import { Card } from "../ui/Card/Card";
import { Button } from "../ui/Button/Button";

type Props = {
    onSubmit: (nome: string, data: string) => Promise<void> 
}

export const FormAdicionarAtividade = ({onSubmit: salvarAtividade}: Props) => {
    const [nome, setNome] = useState<string>("");
    const [dia, setDia] = useState<string>("");
    const [hora, setHora] = useState<string>("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                salvarAtividade(nome, `${dia} ${hora}`);
            }}
        >
            <Card id={styles.place}>
                <IconeLocal/>
                Florianópolis, SC
            </Card>

            <div className={styles.fields}>
                <div className={styles.fieldWrapper}>
                    <IconeAtividade/>
                    <input
                        name="atividade"
                        type="text"
                        placeholder="Qual a atividade?"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className={styles.fieldWrapper}>
                    <IconeData/>
                    <SelecaoDias
                        dia={dia}
                        setDia={setDia}
                    />
                </div>
                <div className={styles.fieldWrapper}>
                    <IconeHora/>
                    <SelecaoHoras
                        hora={hora}
                        setHora={setHora}
                    />
                </div>
            </div>
            <Button type="submit">Salvar atividade</Button>
        </form>
    );
}