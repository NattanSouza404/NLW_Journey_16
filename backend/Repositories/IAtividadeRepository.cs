using backend.Models;

namespace backend.Repositories
{
    public interface IAtividadeRepository
    {
        Task<IEnumerable<Atividade>> ConsultarTodosAsync();

        Task<Atividade?> ConsultarPorIdAsync(int id);

        Task<Atividade> CriarAsync(Atividade atividade);

        Task<bool> AtualizarAsync(Atividade atividade);

        Task<bool> DeletarAsync(int id);
    }
}