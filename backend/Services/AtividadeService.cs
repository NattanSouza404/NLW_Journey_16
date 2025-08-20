using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class AtividadeService(IAtividadeRepository repository) : IAtividadeService
    {
        private readonly IAtividadeRepository _repository = repository;
        
        public async Task<IEnumerable<Atividade>> ConsultarTodosAsync()
        {
            return await _repository.ConsultarTodosAsync();;
        }

        public async Task<Atividade?> ConsultarPorIdAsync(int id)
        {
            return await _repository.ConsultarPorIdAsync(id);
        }

        public async Task<Atividade> CriarAsync(Atividade atividade)
        {
            return await _repository.CriarAsync(atividade);
        }

        public async Task<bool> AtualizarAsync(Atividade atividade)
        {
            return await _repository.AtualizarAsync(atividade);
        }

        public async Task<bool> DeletarAsync(int id)
        {
            return await _repository.DeletarAsync(id);
        }
    }
}