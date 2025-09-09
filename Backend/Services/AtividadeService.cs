using Backend.Models;
using Backend.Repositories;
using Backend.Validators;

namespace Backend.Services
{
    public class AtividadeService(IAtividadeRepository repository, IValidator<Atividade> validator) : IAtividadeService
    {
        private readonly IAtividadeRepository _repository = repository;
        private readonly IValidator<Atividade> _validator = validator;
        
        public async Task<IEnumerable<Atividade>> ConsultarTodosAsync()
        {
            return await _repository.ConsultarTodosAsync(); ;
        }

        public async Task<Atividade?> ConsultarPorIdAsync(int id)
        {
            return await _repository.ConsultarPorIdAsync(id);
        }

        public async Task<Atividade> CriarAsync(Atividade atividade)
        {
            _validator.Validar(atividade);

            return await _repository.CriarAsync(atividade);
        }

        public async Task<bool> AtualizarAsync(Atividade atividade)
        {
            _validator.Validar(atividade);

            return await _repository.AtualizarAsync(atividade);
        }

        public async Task<bool> DeletarAsync(int id)
        {
            return await _repository.DeletarAsync(id);
        }
    }
}