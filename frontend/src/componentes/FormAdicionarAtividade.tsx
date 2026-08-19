import { useState } from "react";
import { IconeAtividade } from "./icones/IconeAtividade";
import { IconeData } from "./icones/IconeData";
import { IconeHora } from "./icones/IconeHora";
import { IconeLocal } from "./icones/IconeLocal";
import { SelecaoDias } from "./SelecaoDias";
import { SelecaoHoras } from "./SelecaoHoras";

type Props = {
    onSubmit: (nome: string, data: string) => Promise<void> 
}

export const FormAdicionarAtividade = ({onSubmit: salvarAtividade}: Props) => {
    const [nome, setNome] = useState<string>("");
    const [dia, setDia] = useState<string>("");
    const [hora, setHora] = useState<string>("");

    return (
        <form
            id="form-adicionar-atividade"
            onSubmit={(e) => {
                e.preventDefault();
                salvarAtividade(nome, `${dia} ${hora}`);
            }}
        >
            <div id="place" className="card-bg">
                <IconeLocal/>
                Florianópolis, SC
            </div>

            <div className="fields">
                <div className="field-wrapper">
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
                <div className="field-wrapper">
                    <IconeData/>
                    <SelecaoDias
                        dia={dia}
                        setDia={setDia}
                    />
                </div>
                <div className="field-wrapper">
                    <IconeHora/>
                    <SelecaoHoras
                        hora={hora}
                        setHora={setHora}
                    />
                </div>
            </div>
            <button>Salvar atividade</button>
        </form>
    );
}