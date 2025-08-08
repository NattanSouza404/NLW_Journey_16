export const consultarTodos = async () => {
    return [
        {
        id: 1,
        nome: "Almoço",
        data: new Date("2024-07-08 10:00"),
        finalizada: true
        },
        {
        id: 2,
        nome: "Academia",
        data: new Date("2024-07-09 12:00"),
        finalizada: false
        },
        {
        id: 3,
        nome: "Gaming session",
        data: new Date("2024-07-09 16:00"),
        finalizada: false
        }
    ];
}