using Backend.Models;

namespace Backend.Services
{
    public interface IAtividadeService
    {
        public Task<IEnumerable<Atividade>> ConsultarTodosAsync();

        public Task<Atividade?> ConsultarPorIdAsync(int id);
        
        public Task<Atividade> CriarAsync(Atividade atividade);

        public Task<bool> AtualizarAsync(Atividade atividade);

        public Task<bool> DeletarAsync(int id);
    }
}