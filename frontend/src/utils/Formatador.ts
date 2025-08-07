import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export const Formatador = (data: any) => {
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