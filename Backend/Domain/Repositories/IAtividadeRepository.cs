using Backend.Domain.Models;

namespace Backend.Domain.Repositories
{
    public interface IAtividadeRepository
    {
        Task<IEnumerable<Atividade>> ConsultarTodosAsync(string? nome);

        Task<Atividade?> ConsultarPorIdAsync(int id);

        Task<Atividade> CriarAsync(Atividade atividade);

        Task<bool> AtualizarAsync(Atividade atividade);

        Task<bool> DeletarAsync(int id);
    }
}