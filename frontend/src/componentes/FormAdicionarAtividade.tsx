import { IconeAtividade } from "./icones/IconeAtividade";
import { IconeData } from "./icones/IconeData";
import { IconeHora } from "./icones/IconeHora";
import { IconeLocal } from "./icones/IconeLocal";
import { SelecaoDias } from "./SelecaoDias";
import { SelecaoHoras } from "./SelecaoHoras";

type Props = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void> 
}

export const FormAdicionarAtividade = ({onSubmit: salvarAtividade}: Props) => {
    return (
        <form onSubmit={salvarAtividade} id="form-adicionar-atividade">
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
                    />
                </div>
                <div className="field-wrapper">
                    <IconeData/>
                    <SelecaoDias/>
                </div>
                <div className="field-wrapper">
                    <IconeHora/>
                    <SelecaoHoras/>
                </div>
            </div>
            <button>Salvar atividade</button>
        </form>
    );
}