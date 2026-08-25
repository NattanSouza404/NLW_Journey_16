import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export type FormatoData = {
  dia: {
    numerico: string;
    semana: {
      curto: string;
      longo: string;
    };
  };
  mes: string;
  hora: string;
};

export const Formatador = (data: any): FormatoData => {
    dayjs.locale('pt-br');

    return {
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd')
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}